import logo from './logo.svg';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
const router = createBrowserRouter([
  {"path": "home",element: <Home/>},
  {"path":"about",element: <About/>}
]);

function App() {
  const getUser=async()=>{
    let res=await fetch('https://reqres.in/api/users/2');
    let serverres=await res.json();
    console.log(serverres['data']);
  }

  return (
    <div >
      <Home/>
      <About/>
      <button onClick={getUser}>click to get user list</button>
        </div>
  );
}

export default App;
