import React, { useContext, useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input"
import { Link } from 'react-router-dom';
import { validateEmail } from "../../utils/helper";
import axiosInstances from "../../utils/axiosInstances";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);

  const {updateUser} = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogin = async(e) => {
    e.preventDefault();
    if(!validateEmail(email))
    {
      setError("Please enter a valid email address!");
      return;
    }
    if(!password)
    {
      setError("Please enter password")
      return;
    }
    setError(null);

    try {
      const response = await axiosInstances.post(API_PATHS.AUTH.LOGIN,{
        email,
        password
      });

      const {token,user} = response.data;

      if(token) {
        localStorage.setItem("token",token);
        updateUser(user);
        navigate("/dashboard");
      }
    }
    catch(error) {
      if(error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
      else {
        setError("Something went wrong. Please try again later");
      }
    }
  }
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">Please enter your credentials to Login</p>
      <form onSubmit={handleLogin}>
        <Input 
        value = {email}
        onChange = {({target})=>setEmail(target.value)}
        label = "Email address"
        placeholder = "abcde@gmail.com"
        type = "text"
        />

        <Input 
        value = {password}
        onChange = {({target})=>setPassword(target.value)}
        label = "password"
        placeholder = "Min 8 Characters"
        type = "password"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button type="submit" className="btn-primary">
          LOGIN
        </button>
        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account?{" "}
          <Link  className="font-medium text-primary underline" to="/signUp">
          SignUp
          </Link>
        </p>
      </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
