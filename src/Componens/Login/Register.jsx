import { useContext, useEffect, useState } from "react";
import { AuthContext} from "../Firebase/Context";
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Register = () => {
   const Datas = useContext(AuthContext);
   const provider = new GoogleAuthProvider();
   const providers = new GithubAuthProvider();
   const navigate = useNavigate();
   const auth = getAuth()
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const { signUpEmailAndPassword } = Datas;
   const handale =(e)=>{
    e.preventDefault()
    signUpEmailAndPassword(email, password);
    console.log("create");
    setEmail('')
    setPassword('')
   }
   const google =()=>{
     signInWithPopup(auth, provider)
   }
   const github =()=>{
    signInWithPopup(auth, providers)
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
                 onClick={handale}>Create Account
             </button>
             </div>
             <div className="flex justify-center gap-10" >
             <button className="text-3xl"  onClick={google}><FcGoogle /></button>
             <button className="text-3xl" onClick={github}><IoLogoGithub></IoLogoGithub> </button>
             </div>

        </div>
            
    );
};
export default Register;