import React ,{useState}  from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './authentification.css'
function Login() {
  let navigate = useNavigate();
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const handleSubmit = (e) => {
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3001/login",
      data: {
        email,
        password,
      },
    };
 // make the API call
    axios(configuration)
      .then((_result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
    // prevent the form from refreshing the whole page
    e.preventDefault();
    navigate('/Espace_administration');
    // make a popup alert showing the "submitted" text
    
  }
 
    return ( <div>
 
<section className="auth">
  <h3 className="auth3">Authorization</h3>
  <h1>Log in to your account</h1>
  <form className="form" onSubmit={(e)=>handleSubmit(e)}   >
    <div class="form-item">
      <input type="text" required className="inputauth" name="email"   onChange={(e) => setEmail(e.target.value)}  />
      <label className="label">Email</label>
    </div>
    <div className="form-item">
      <input type="password" required  className="inputauth" name="password" value={password}  onChange={(e) => setPassword(e.target.value)}   />
      <label className="label">Password</label>
    </div>
    <div className="form-submit">
      
      <button type="submit" className="button"  onClick={(e)=>handleSubmit(e)}> Log in </button> 
     
                    
      
          </div>
          {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )} 
  </form>
 
</section>


 </div>)
} 
export default Login 