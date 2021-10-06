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
     let isExist=false
      if(this.state.users!==[])
      {
        this.state.users.map((el)=>{
          if(el.name==name)
          {
            isExist=true
            this.setState({Error:"This User Already exist "})
          }
        })
      }
      if(!isExist)
      {
      axios.get( `https://api.github.com/users/${name}`).then((res) => {
      let allUser=this.state.users
      let r=res.data
      let resFollower
      axios.get( r.followers_url).then((res) =>{resFollower=res.data
        allUser.push({name:r.login, image:r.avatar_url, created_at:r.created_at,
          followers:r.followers, following:r.following ,repoNum:r.public_repos,followersUrl:resFollower})        
          this.setState({users:allUser})
      }).catch((err)=>err)
      

      }).catch((err)=>this.setState({Error:"invalid UserName"}))}}


render(){  return (
    <main>
      <h1><i class="fa fa-github" aria-hidden="true"></i>&nbsp;Github Users</h1>
      <input  onChange={(event) => this.handleOnChange(event)} type="text" placeholder="User Name"/>
      <button onClick={()=>this.addUser(this.state.textareaValue)}>Add</button><br/>
      <label className="Error">{this.state.Error} </label>
       <div className="container">
          {this.state.users.map((el,i)=>(<Card user={this.state.users[i]} addUser={this.addUser} key={i}/>))}
       </div>
    </main>
  );
}}



export default App;
