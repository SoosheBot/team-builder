import React from 'react'

const Member = (props) => {
    //doing it this way is cleaner and keeps you from having to do member.name, member.email, etc.
    const { name, email, role, about } = props.member;
    return (
       <div className="member">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <p><em>About Member: {about}</em></p>
        </div>
        
    )
}

export default Member;
