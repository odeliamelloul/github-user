import React from 'react'
import Followers from '../Followers';
import Following from './Following';
import './card.css';

function Card  ({user,addUser})  {
    
    const splitTime =(str)=>{
         const arr = str.split('T')
         let date = arr[0]
         return `Created Date: ${date} `
    }
    
    
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={user.image} alt="Placeholder image" style={{width:"230px",margin:"0 auto",marginTop:"15px",borderRadius:"50%",border:"rgb(129, 41, 103) solid 2px "}}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-content">
                    <p className="title is-4">@{user.name}</p>
                </div>
                </div>

                <div className="content">
                <strong>Followers:{user.followers}<Followers followers={user.followersUrl}  addUser={addUser} /></strong>
                <strong><p>Repository Num: {user.repoNum}</p></strong>
                <strong><time>{splitTime(user.created_at)}</time></strong><br/>
               
                <a  className="gotoGithub" href={`https://github.com/${user.name}`}><i class="fa fa-github" aria-hidden="true"></i>go to my gitHub</a>
                <br />
                </div>
            </div>
        </div>
    )
}

export default Card
