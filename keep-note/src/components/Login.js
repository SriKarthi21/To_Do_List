import React from 'react';
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './AuthContext';
    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [loginCode, setLoginCode] = useState({
    loginName: "",
    loginPassword: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
console.log(e.target);
    const { name, value } = e.target;
    setLoginCode({ ...loginCode, [name]: value });
  }
const handleSubmit=(e)=>{
 e.preventDefault();

validateUser(loginCode)
}
  const validateUser = (loginCode) => {
    if ( loginCode.loginName==="Login" && loginCode.loginPassword==="Login@123") {
      alert("Login Success")
      login();
      navigate("/notes");
    } else {
      setError("Enter valid password");
    }
  }
  return (
    <div style={{ color: "white" ,backgroundColor:"gray",minHeight:"580px",display:"flex",justifyContent:"center"}}>
<div style={{backgroundColor:"brown", border: "1px solid #ccc",borderRadius:"10px",alignItems:"center" ,
  padding: "20px", width: "300px",height:"300px",marginTop:"50px"}}>
  <form  onSubmit={handleSubmit}>

      <TextField sx={{bgcolor:"white",margin:"10px"}} label="User Name" variant="outlined"  type="text" name="loginName" value={loginCode.loginName}
          onChange={handleChange} />
          <br/>
    <TextField sx={{bgcolor:"white",margin:"10px"}} label="password" variant="outlined" type="password" name="loginPassword" value={loginCode.loginPassword}
           onChange={handleChange}  />
               
      <Button variant="contained" color="success"sx={{margin:"10px"}}
      type="submit" >Login</Button>
                     <p>{error}</p>

    </form>

  </div>

</div>
  )
}

export default Login