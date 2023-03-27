import React,{useState} from 'react'
import Lg2 from '../images/lg2.svg'
import { useNavigate} from 'react-router-dom'

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const clientId = 'x1zbg9zvt5rtpde23f8yv0l0hw14qz';
const redirectUri = 'http://localhost:3000/Home'; // Your callback URL
const scope = 'user:read:email'

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would perform some authentication logic to check if the provided
    // username and password are valid. For this example, we'll just assume that
    // the login is successful if the username is "admin" and the password is "password".
    if (username === "KelvinMata" && password === "12345") {
      navigate("/Home"); // redirect to the dashboard page if the login is successful
    } else {
      alert("Invalid username or password"); // display an error message if the login is unsuccessful
    }
  };
 
    const handleLogin = () => {
      const authUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
      window.location.href = authUrl;
    };
  
  return (

    <div className='logpage'>
      <img src={Lg2} className='log1' alt='3'/>  
       <div className='inputt' onSubmit={handleSubmit}>
          <input placeholder='Email' className='input-mail' value={username} onChange={handleUsernameChange} />
          <input placeholder='Password' className='input-pass' value={password} onChange={handlePasswordChange}/>
          <button type="submit" className='button3' onClick={handleSubmit}>Login</button>
       </div>
       <button  className='button4' onClick={handleLogin}>
            Login with Twitch
       </button>


    </div>
  )
}

export default LoginPage