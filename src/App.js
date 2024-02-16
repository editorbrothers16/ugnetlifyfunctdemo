import React,{useState} from 'react'
import './App.css';

function App() {
  const [email,setEmail] =useState('')
      const [password,setPassword] = useState('')

    const handlemail=(e)=>{
      setEmail(e.target.value)
    }
    const handlepassword=(e)=>{
      setPassword(e.target.value)
    }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    let bodyContent = JSON.stringify({email,password});
     let response = await fetch("/.netlify/functions/saveuser", { 
          method: "POST",
           body: bodyContent
      });
    let result = await response.json()
    if(result.email){alert("user created")}
  }
    
  return (
    <form onSubmit={handleSubmit}  style={{"display":"flex","flexDirection":"column","width":"300px"}}>
    <input value ={email} onChange={handlemail} type="email" id="email" placeholder="enter email"/>
    <input value={password} onChange={handlepassword} type="password" id="password" placeholder="enter password"/>
    <button type="submit">Submit</button>
</form>
  )
}

export default App;
