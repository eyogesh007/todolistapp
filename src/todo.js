import react,{useState,useEffect} from 'react';
import axios from 'axios';
import List from './list.js'
import {useParams} from 'react-router-dom';
function Todo(){

  const {name}= useParams();

  //useEffect(()=>{axios.get('https://login-fd8d7-default-rtdb.firebaseio.com/todo.json').then(res=>setRes(res.data))},[]);
    const [list,setList]=useState(
      {
        title:"",
        task:""
      })

    const [res,setRes]=useState({})



    const {title,task}=list;

    function change(e){
      var name=e.target.name;
      var value=e.target.value;
      setList({...list,[name]:value})
    }

    function fore(values){
       return <List title={res[values].title} task={res[values].task}/>
    }

    function todosub(e)
    {
      e.preventDefault();

      axios.post(`https://login-fd8d7-default-rtdb.firebaseio.com/todo/${name}.json`,list).then(console.log("posted"));
      axios.get(`https://login-fd8d7-default-rtdb.firebaseio.com/todo/${name}.json`).then(res=>setRes(res.data))
      //setRes({...res,list})
    }


    axios.get(`https://login-fd8d7-default-rtdb.firebaseio.com/todo/${name}.json`).then(res=>{if(res.data!=null)setRes(res.data);});
    console.log(res)
    return(
    <div>

      <form onSubmit={todosub}>
      <input type="text" name="title" onChange={change} placeholder="title" />
      <input type="text" name="task" onChange={change} placeholder="task" />
      <input type="submit"  />
      </form>
      <br/>
      {Object.keys(res).map((values,i)=>{return( <List key={i} title={res[values].title} task={res[values].task} />)})}

    </div>

  )
}

export default Todo;
