

import React from 'react'

const Followers = ({followers,addUser}) => {

return (
     <div>  
         <select>
            { followers.map(el=>{ return(<option onMouseUp={()=>addUser(el.login)}>{el.login}</option>)})}
        </select>
    </div>
 
    )
}

export default Followers
