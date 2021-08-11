import './App.css';
import React from 'react';
import Card from './Components/Card/Card'
import axios from "axios"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      textareaValue:"",
      Error:"",
      PreUsers: ["gagishmagi","odeliamelloul","eeee"],
      users:[]
    }
  }

  componentDidMount()
  {
   this.state.PreUsers.map((name)=>{
    this.addUser(name)
   })
  }

  handleOnChange(event) { this.setState({ textareaValue: event.target.value,Error:"" })} 


  addUser(name)
  {
    axios.get(  `https://api.github.com/users/${name}`).then((res) => {
    let allUser=this.state.users
    allUser.push({name:res.data.login,image:res.data.avatar_url,created_at:res.data.created_at,followers:res.data.followers,following:res.data.following})
    this.setState({users:allUser})
    
  }).catch((err)=>this.setState({Error:"invalid UserName"}))}


render(){  return (
    <main>
      <header>Github Users</header>
      <input  onChange={(event) => this.handleOnChange(event)} type="text" placeholder="User Name"/>
      <button onClick={()=>this.addUser(this.state.textareaValue)} >Add</button>
      <label className="Error">{this.state.Error}</label>
       <div className="container">
          {this.state.users.map((el,i)=>(<Card user={this.state.users[i]} key={i}/>))}
       </div>
    </main>
  );
}}



export default App;
