import React, { useState, useEffect } from "react";
import API from '../shared/jsonplaceholder';

const Users = () => {

  const [usersListState, setUsersListState] = useState([]);

  const [userNameState, setUserNameState] = useState('Enter New User Name');

  const [errorState, setErrorState] = useState('');

  const enterName = event => {
    setUserNameState(event.target.value)
  }

  const submitName = event => {
    API.post(`users`, {name: userNameState})
        .then(response => {
            console.log(response);
        })
  }

  useEffect(() => {
    console.log("request to server");
    API.get(`users0`)
        .then(response => {
            console.log(response.data);
            setUsersListState(response.data);
            setErrorState('');
        })
        .catch(error => {
            setErrorState(`Error while getting user list`);
            setUsersListState([]);
            console.log(error.response.status);
        })

  }, []);

  return (
  
    <div className="big-box">
        <h3 style={{color:"red"}}>{errorState}</h3>
        <ul>
            {usersListState
            .map(user => 
                <li key={user.id}>
                    <span className="user-id">{user.id}.</span> 
                    <span className="user-name">{user.name}</span>
                </li>)
            }
        </ul>
        <div>
            <input type="text" onChange={enterName} value={userNameState}/>
            <button onClick={submitName} className="my-button">Add New User</button>
        </div>
    </div>
  )

}

export default Users;