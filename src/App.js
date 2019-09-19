import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form';
import MemberForm from './components/MemberForm';
import MemberList from './components/MemberList';

function App() {
  const [members, setMember] = useState(Form);
  const addNewMember = member => {
    setMember([...members, member]);
  };

  return (
    <div className="App">
      <MemberForm addNewMember={addNewMember}/>
      <MemberList membersList={members}/>
    </div>
  );
}

export default App;


    //  { //some code I took out of the app.js to clean it up for a minute
    //   /* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}