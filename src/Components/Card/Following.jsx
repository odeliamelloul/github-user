import React from 'react'

const Following = ({followers,addUser}) => {
return (
     <div>  
         <select>
            { followers.map(el=>{ return(<option>{el.login}</option>)})}
        </select>
    </div>
 
    )
}

export default Following
