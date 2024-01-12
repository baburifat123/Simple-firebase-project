import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const Datas = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { SingIn} = Datas;
    console.log(Datas);
    const handale =(e)=>{
        e.preventDefault()
        SingIn(email, password);
        setEmail('')
        setPassword('')
       }
       useEffect(() => {
        if (Datas.Islogin) {
            navigate('/');
        } 
    }, [Datas, navigate]);
    return (
    <div className="space-y-6 bg-slate-300 p-11 rounded-md ">
        <input
         onChange={(e)=>setEmail(e.target.value)}
          value={email} 
          type="email" 
          placeholder="Enter Gmail" 
          className="outline-none w-full border p-2 rounded-md border-blue-400" />

          <input  
          onChange={(e)=>setPassword(e.target.value)} 
          value={password} type="password"
          placeholder="Enter Password" 
          className="outline-none w-full border p-2 rounded-md border-blue-400" />
         <br />
       <div className="flex justify-center">
       <button 
           className="w-[160px] text-lg font-bold  text-white bg-blue-600 rounded-md p-2 hover:bg-blue-800" 
           onClick={handale}>Login
       </button>
       </div>
       
  </div>
    );
};

export default Login;