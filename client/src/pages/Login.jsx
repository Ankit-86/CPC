import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [user,setuser]=useState({
    email:'',
    password:''

  });
  //handle input
  const handleChange=(event)=>{
    let name=event.target.name
    let value=event.target.value

    setuser({...user,[name]:value})
  }

  //handle login
  const handleSubmit= async (event)=>{
    event.preventDefault();
    const {email,password}=user;
    try {
        const res =  await fetch('/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,password
          })
        
      })
      if(res.status===400|| !res){
        window.alert("invalid credintials")
      }else{
        window.alert("login successfully");
        // window.location.reloadd();
        navigate('/');
        // history.pushState('/login')
      }
    } catch (error) {
      
    }
  }
  return (
    <>
    <div>
        <div className='container shadow my-5' >
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-item-center form'>
                    <h1 className='display-4 fw-bolder' style={{marginLeft:"20px"}}> welcome To CPC</h1>
                    <p className="lead text-center"><span style={{ color: "#eb0c0c"}}>Enter your crenditials</span></p>
                    <h5 style={{marginLeft:"220px"}}>
                      or
                    </h5>
                    <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50" style={{marginLeft:"110px",backgroundcolor: 'black'}}>Register</NavLink>

                </div>
                <div className='col-md-6'><h1 className='display-6' > Login</h1>
                <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={handleChange}/>
  </div>
  
  <div class="form-group">
    <label style={{marginLeft:"40px",}} for="exampleInputPassword1">Password</label>
    <input style={{marginLeft:"40px"}} type="password" class="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleChange}/>
  </div><br></br><br></br>

  <button style={{marginLeft:"60px" ,marginTop:"19px"}} type="submit" class="btn btn-primary">Submit</button>
</form></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
