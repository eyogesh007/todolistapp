import './App.css';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
import Hello from './Hello.js';
import Hi from './Hi.js';
import Login from './Login.js'
import Signup from './signup.js'
import Todo from './todo.js'
import Pagenotfound from './Pagenotfound.js'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hi" element={<Hi />} />
            <Route path="/todo/:name" element={<Todo />} />
            <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
