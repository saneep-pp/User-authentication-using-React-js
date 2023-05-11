import { useEffect, useState } from "react";
import{Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate=useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
  },[]);

  const proceedLogin = (e) => {
    e.preventDefault();
    if(validate()){
        // console.log('proceed')
        fetch("http://localhost:8000/user/" + username).then(async (res)=>{
            
            return await res.json();
        }).then(async(resp)=>{
         
            console.log(resp);
            if(Object.keys(resp).length===0){
                toast.error('Please Enter valid Username');
               
            }
            
            else{
              
                if(resp.password === password){
                    toast.success('Success');
                    sessionStorage.setItem('username',username);
                    usenavigate('/')
                }
                else{
                toast.error('Please Enter valid Creditionals');  
            }
        }
    }).catch((err)=>{
            toast.error("Login Failed due to"+err.message);
        })
    }
  };

  const validate=()=>{
    let result=true;
    if(username === '' || username ===null){
        result=false;
        toast.warning('Please Enter  User Name')
    }
    if(password === '' || password ===null){
        result=false;
        toast.warning('Please Enter Password')
    }
    return result;

  }

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
        <form onSubmit={proceedLogin} className="container">
            <div className="card">
            <h2>User Login</h2>
            <div className="card-body">
                <div className="form-group">
                    <label>User Name<span className="errmsg">*</span></label>
                    <input  value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>password<span className="errmsg">*</span></label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"></input>
                </div>
            </div>
            <div className="card-footer">
                <button type="submit" className="btn btn-primary">Login</button>
                <Link className="btn btn-success" to={'/register'}>New User</Link>
            </div>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
