import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [mode, setMode] = useState("Login");
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
const {token,setToken,navigate,backendUrl}=useContext(ShopContext)
  const onSubmitHandler = async(e) => {
    e.preventDefault(); 
    try {
      if(mode==='Sign Up'){
const res=await axios.post(backendUrl+'/api/user/register',{name,email,password})
if(res.data.success){
  setToken(res.data.token)
  localStorage.setItem('token',res.data.tokenn)
}else{
  toast.error(res.data.message)
}
      }else{
const res=await axios.post(backendUrl+'/api/user/login',{email,password})
if(res.data.success){
  setToken(res.data.token)
  localStorage.setItem('token',res.data.token)
  navigate('/')
}else{
  toast.error(res.data.message)
}
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <form
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      onSubmit={onSubmitHandler}
    >
      <div className="inline-flex gap-2 mb-2 mt-10">
        <p className="text-3xl font-bold">{mode}</p>
        <hr className="border-none mt-5 h-[2px] w-8 bg-gray-800" />
      </div>

      {mode !== "Login" && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border border-gray-800 rounded py-1.5 px-5 w-full"
        />
      )}

      <input
        type="email"
        value={email}
          onChange={(e)=>setEmail(e.target.value)}
        placeholder="Email"
        className="border border-gray-800 rounded py-1.5 px-5 w-full"
      />
      <input
        type="password"
        value={password}
          onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"
        className="border border-gray-800 rounded py-1.5 px-5 w-full"
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Password?</p>
        {mode === "Login" ? (
          <p onClick={() => setMode("Sign Up")} className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setMode("Login")} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {mode === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
