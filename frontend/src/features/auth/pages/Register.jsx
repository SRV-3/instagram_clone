import React, { useState } from 'react'
import {Link} from 'react-router'
import axios from 'axios'


function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    async function handelSubmit(e){
        e.preventDefault()

        
    }

  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handelSubmit}>
                <input
                 onInput={(e)=>{setUsername(e.target.value)}}
                 type="text" 
                 name='username' 
                 placeholder='Enetr Username'/>

                <input 
                 onInput={(e)=>{setPassword(e.target.value)}}
                 type="password" 
                 name='password' 
                 placeholder='Enter Password' />

                <input
                 onInput={(e)=>{setEmail(e.target.value)}}
                 type="text"
                 name='email' 
                 placeholder='Enter Your Email' />

                <button>REGISTER</button>
            </form>
            <p>Already have an account? <Link to='/login' className='toggleAuthForm'>LogIn</Link> </p>
        </div>
    </main>
  )
}

export default Register
