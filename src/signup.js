import react,{useState,useEffect} from 'react';
import {Navigate,useNavigate} from 'react-router';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Signup = ()=>{

    let navigate=useNavigate();
    const[data,setData]=useState({
      username:"",
      password:"",
      confirm:""
    })
    const {username,password,confirm}=data;

    function loginfun(e){
      var name=e.target.name;
      var value=e.target.value;
      setData({...data,[name]:[value]});
    }

    function submitform(e){
      e.preventDefault();
      console.log(data);
      if(password[0]===confirm[0]){
       axios.post('https://login-fd8d7-default-rtdb.firebaseio.com/info.json',data);
       navigate('/login');
     }
      else
       console.log("passwords not match");
    }

    return(
      <div>
      <center>
        <form onSubmit={submitform}>
          <input onChange={loginfun} type="text" name="username" placeholder="username" value={username}/>
          <br/>
        <input onChange={loginfun} type="password" name="password" placeholder="password" value={password}/>
          <br/>
          <input onChange={loginfun} type="password" name="confirm" placeholder="confirm password" value={confirm}/>
          <br/>
        <input type="submit" onClick={submitform}/>
        </form>
        </center>
        <Link to="/login">already have an account</Link>
      </div>
    );

}

export default Signup;
