import React, { useState, useEffect } from "react";
import API from '../shared/jsonplaceholder';

const Users = () => {

  const [usersListState, setUsersListState] = useState([]);

  useEffect(() => {
    console.log("request to server");
    API.get(`users`)
        .then(response => {
            console.log(response.data)
            setUsersListState(response.data);
        })


    


  }, []);

  return (
  
    <div className="big-box">
        <ul>
            {usersListState
            .map(user => 
                <li key={user.id}>
                    <span className="user-id">{user.id}.</span> 
                    <span className="user-name">{user.name}</span>
                </li>)
            }

        </ul>
    </div>
  )

}

export default Users;