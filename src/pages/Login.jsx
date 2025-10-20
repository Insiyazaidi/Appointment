import React, { useState } from 'react'

const Login = () => {
  const [state , Setstate] = useState("Login")
  const [email , Setemail]= useState("")
    const [password , Setpassword]= useState("")
      const [name , Setname]= useState("")
        const onsubmithandler = async(e)=>{
          e.preventDefault()
      
    }
  return (
  
    <div>
      <h1>HELLO</h1>
<form className='min-h-[80vh] flex items-center'>
<div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
  <p className='text-2xl font-semibold' >{state==="Sign up" ? "Create Account" :"Login"}</p>
  <p >Please {state==="Sign up" ? "create Account" :"Login"} to book Appointment </p>
 
 {
  state==="Sign up" &&   <div className='w-full'>
    <p>Full Name</p>
    <input   className='border -border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=> Setname (e.target.value)} required></input>
  </div>
 }
 

    <div className='w-full'>
    <p>Email</p>
    <input  className='border -border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e)=> Setemail (e.target.value)} required></input>
  </div>
   <div className='w-full'>
    <p>Password</p>
    <input  className='border -border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e)=> Setpassword(e.target.value)} required></input>
  </div>
 <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state==="Sign up" ? "Create Account" :"Login"}</button>
{
  state==="Sign up" ? <p>Already have an account ? <span onClick={()=>Setstate("Login")} className='text-primary underline cursor-pointer'> Login here</span> </p>:<p>Create a new account ? <span className='text-primary underline cursor-pointer'onClick={()=>Setstate("Sign up")}>click here</span>  </p>
}

</div>
</form>

    </div>
  )
}

export default Login