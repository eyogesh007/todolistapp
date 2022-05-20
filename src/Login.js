import react,{useState,useEffect} from 'react';
import {Link,Navigate,useNavigate} from 'react-router';
import axios from 'axios';
const Login = ()=>{

    let navigate=useNavigate();
    axios.get('https://login-fd8d7-default-rtdb.firebaseio.com/info.json').then(res=>setRes(res.data))
    const[data,setData]=useState({
      username:"",
      password:""
    })
    const[res,setRes]=useState({
    })
    const {username,password}=data;

    function loginfun(e){
      var name=e.target.name;
      var value=e.target.value;
      setData({...data,[name]:[value]});
    }

    function validate(values){
      if(username[0]==(res[values].username[0]) && password[0]==(res[values].password[0]))
      {navigate(`/todo/${username}`)}
      else
      console.log("not correct passowrd")
    }

    function submitform(e){
      e.preventDefault();
      console.log(data);
      Object.keys(res).forEach(validate)

    }

    return(
      <div>
      <center>
        <form onSubmit={submitform}>
          <input onChange={loginfun} type="text" name="username" placeholder="username" value={username}/>
          <br/>
        <input onChange={loginfun} type="password" name="password" placeholder="password" value={password}/>
          <br/>
        <input type="submit" onClick={submitform}/>
        </form>
        </center>
      </div>
    );

}

export default Login;
