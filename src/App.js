import logo from './logo.svg';
import './App.css';
import { useEffect} from 'react';
import { useLocalState } from './util/useLocalStorage';

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
    <div className="App">
      <h1>Hello, world</h1>
      <div><h1>Jwt value is </h1><br></br><h2>{jwt}</h2></div>
    </div>
  );
}

export default App;
