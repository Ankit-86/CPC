// import { useState } from 'react'
import React, {useState}from 'react'
import { NavLink } from 'react-router-dom'
// import {useHistory} from 'react-router';

function Register() {
    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
      })
    
      //handle input
    
      const handleInput=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
    
        setUser({...user,[name]:value});                                                              
      }
      //hendle submit
    const handleSubmit =async (event)=>{
      event.preventDefault();
      //store object data into variable
      const {username,email,password}=user;
      try {
        const res=await fetch('/register',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            username,email,password
          })
        })
        if(res.status === 400 || !res){
          window.alert("already used detail")
        }else{
          window.alert("registered successfully");
          // history.pushState('/login')  
        }
      } catch (error) {
        console.log(error);
      }
}
return(
    <div>
 <div className='container shadow my-5' >
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-item-center form'>
                    <h1 className='display-4 fw-bolder' style={{marginLeft:"20px"}}> welcome register</h1>
                    <p className="lead text-center"><span style={{ color: "#eb0c0c"}}>Enter your crenditials</span></p>
                    <h5 style={{marginLeft:"220px"}}>
                      or
                    </h5>
                    <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50" style={{marginLeft:"110px",backgroundcolor: 'black'}}>Register</NavLink>

                </div>
                <div className='col-md-6'><h1 className='display-6' > Login</h1>
                <form onSubmit={handleSubmit} method="POST">
  <div className="form-group">
    <label style={{marginLeft:"0px",marginRight:"4px"}} for="exampleInputEmail1">name</label>
    <input style={{marginLeft:"0px" ,width:"150px"}} type="text" className="form-control" id="name" name="username" value={user.username} onChange={handleInput} />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>

  <div className="form-group">
    <label style={{marginLeft:"30px"}} for="exampleInputEmail1">Email</label>
    <input style={{marginLeft:"30px",width:"150px"}} type="email" className="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={handleInput} />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label style={{marginLeft:"40px"}} for="exampleInputPassword1">Password</label>
    <input style={{marginLeft:"40px"}} type="password" className="form-control" id="exampleInputEmail1" name="password" value={user.password} onChange={handleInput} />
    
  </div>
  
  <button style={{marginLeft:"60px",marginTop:"19px"}} type="submit" className="btn btn-primary">Submit</button>
</form></div>
            </div>
        </div>
    </div>

)
}
export default Register;