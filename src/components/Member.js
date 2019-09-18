import React from 'react'

const Member = (props) => {
    //doing it this way is cleaner and keeps you from having to do member.name, member.email, etc.
    const { name, email, role, about } = props.member;
    return (
       <div className="member">
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h3>{role}</h3>
            <p>{about}</p>
        </div>
        
    )
}

export default Member;
