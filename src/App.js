import logo from './logo.svg';
import './App.css';
import { useEffect} from 'react';
import { useLocalState } from './util/useLocalStorage';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dasboard';
import Homepage from './homepage';
import Login from './login';
import PrivateRoute from './privateRoute';

function App() {

  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    if(!jwt){
    const requestBody = {
      "username":"dozie",
      "password":"asdfasdf"
    };
  
    fetch("api/auth/login", {
      headers:{
        "content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(requestBody),
    })
    .then((response) => Promise.all([response.json(), response.headers]))
    .then(([body, headers]) => {
    
      setJwt(headers.get("authorization"))
      console.log(jwt)
    });
  }
  }, []);

useEffect(() => {
  console.log(`JWT is: ${jwt}`)
}, [jwt]);

  return (
    <Routes>
      <Route path="dashboard" element={
      <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>
      }/>
      <Route path="login" element={<Login />}/>
      <Route path="/"element={<Homepage/>}/>
    </Routes>
  );
}

export default App;
