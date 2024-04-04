// import React, { useState } from "react";
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>

// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Sign Up</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="name"></label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//             <label htmlFor="email"></label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password"></label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <i class="far fa-eye" id="togglePassword"></i>

//             <button className="button" type="submit">Log In</button>
//         </form>
//         <button className="link-btn signup" onClick={() => props.onFormSwitch('login')}>LogIn</button>
//     </div>
//     )
// }