import react from 'react';
import {Link} from 'react-router-dom';

const Hi=()=>{
  return <div>
  <ul>
    <li>  <Link to='/hello'>hello</Link></li>
    <li>  <Link to='/hi'>hi</Link></li>
</ul>

  <h1>Hi</h1>
  </div>
}

export default Hi;
