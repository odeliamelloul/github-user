import React from 'react'
import './card.css';

const Card = ({user}) => {
    
    const splitTime =(str)=>{
         const arr = str.split('T')
         let date = arr[0]
         let time = arr[1]
         time = time.split("")
         time.pop()
         time = time.join("")
         return `Date: ${date} Time: ${time}`
    }
    
    
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={user.image} alt="Placeholder image" style={{width:"230px",margin:"0 auto",marginTop:"10px"}}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{user.name}</p>
                    <p className="subtitle is-6">@{user.name}</p>
                </div>
                </div>

                <div className="content">
                <strong><p>followers: {user.followers}</p></strong>
                <strong><p>following: {user.following}</p></strong>
                <strong><time>{splitTime(user.created_at)}</time></strong>
                <br />
                </div>
            </div>
        </div>
    )
}

export default Card
