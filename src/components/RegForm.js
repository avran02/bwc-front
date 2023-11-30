import React from "react";
import { Link } from 'react-router-dom';


// axios.post('/register/', { username: 'example', password: 'example' })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });




class RegForm extends React.Component {
    render() {
        const csrf_token = '123'
        const form = '123'
        return (
            <div>
                <h2>Registration</h2>
                <form method="post">
                    <input placeholder="name"></input>
                    <input placeholder="password" type="password"></input>
                    { csrf_token }
                    { form }
                    <button type="button">Register</button>
                </form>
            </div>
        )
    }
}

export default RegForm