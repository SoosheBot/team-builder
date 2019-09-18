import React from "react";
import Member from './Member';

    const MemberList = props => {
        console.log('MemberList', props);
        return (
            <div className="member-list">
            {props.membersList.map((member, index) => {
                //mapping over the member key at the index of the array
                return (
               <Member key={index} member={member}/>
                );
                })}
            </div>
        );
     };


export default MemberList;