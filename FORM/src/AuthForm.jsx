import React, { useState } from 'react';
import "./App.css";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='container'>
    <div className='form-container'>
    <div className='form-toggle'>
    
     <button className={isLogin ? 'active'  : ""} onClick={()=> setIsLogin(true)}>login</button>
     <button className={!isLogin ? 'active'  : ""} onClick={()=> setIsLogin(false)}>signup</button>

</div>
{isLogin ? 
<>

<div className='form'>
<h2> login form </h2>
<input type="email" placeholder='Email' />
<input type="password" placeholder='password' />
<a href='#'>forgot password</a>
<button>login</button>
<p>Not a member? <a href='#' onClick={()=> setIsLogin(false)}> Signup</a></p>
</div>
</> : 
<>

<div className='form'>
<h2> Signup form </h2>
<input type="email" placeholder='Email' />
<input type="password" placeholder='password' />
<input type="password" placeholder=' confirm password' />
<button>Signup</button>
</div>

</>}

 </div>
 </div>
  );
}

export default AuthForm;
