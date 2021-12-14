import React from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';


const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory()
    const handleClick = (key) =>{
        history.push(`/friend/${key}`)
    }
    const styleFriend = {
        border: '1px solid lightGray',
        margin: '20px',
        padding: '20px',
        borderRadius: '5px'
    }
    return (
        <div style={styleFriend}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <button onClick={() => handleClick(id)}>Show details</button>
        </div>
    );
};

export default Friend;