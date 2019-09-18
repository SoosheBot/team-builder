import React, { useState } from "react";

const MemberForm = props => {
    console.log(props);
    const [list, setList] = useState({name:'', email:'', role:'', about:''});


    const changeHandler = e => {
        setList({...list, [e.target.name]: e.target.value});
        console.log(e.target.name);
    }

    const submitForm = e => {
        e.preventDefault();
        const newList = {...list, id: Date.now() };
        props.addNewMember(newList);
        setList({name:'', email:'', role:'', about:''});
    };

return (
    <form onSubmit={submitForm}>
        <label htmlFor='name'>New Member Name</label>
        <input type="text" name="title" value={list.title} onChange={changeHandler} />

        <label htmlFor='email'>New Member Email</label>
        <input type="text" name="email" value={list.email} onChange={changeHandler}/>

        <label htmlFor='role'>New Member Role</label>
        <input type="text" name="role" value={list.role} onChange={changeHandler}/>

    </form>
);

};

export default MemberForm;