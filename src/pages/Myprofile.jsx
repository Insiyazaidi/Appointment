import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Myprofile = () => {
  const [userdate , setuserdata] = useState({
 name:"Edward Vincent",
 image : assets.profile_pic,
 email:"richardjameswap@gmail.com" ,
 phone:"+1  123 456 7890",
 Address:{
  line1:"57th Cross, Richmond" ,
  line2:"Circle, Church Road, London"
 } , 
 gender:"Male",
 dob:"2000-01-20"
  }
  

  )
   const [isedit , Setisedit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
<img className='w-36 rounded' src={userdate.image}></img>
{
  isedit?<input  className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type='text'value={userdate.name} onChange={e=>setuserdata(prev=>({...prev , name:e.target.value}))}></input>:<p className=' font-medium text-3xl text-neutral-800 mt-4'>{userdate.name}</p>
}
<hr className='bg-zinc-400 h-[1px] border-none'/>
<div>
  <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
  <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
    <p className='font-medium'>Email id:</p>
     <p className='text-blue-500'>{userdate.email}</p>
     <p className='font-medium' >Phone:</p>
     {
       isedit?<input type='text'value={userdate.phone} className='bg-gray-100 max-w-52' onChange={e=>setuserdata(prev=>({...prev , phone:e.target.value}))}></input>:<p className='text-blue-400' >{userdate.phone}</p>
     }
     <p className='font-medium'>Address:</p>
    {
      isedit? <p><input className='bg-gray-50' type="text" value={userdate.Address.line1}  onChange={e=>setuserdata(prev=>({...prev , Address:{...prev.Address , line1:e.target.value} }))} /> <br/><input type="text" value={userdate.Address.line2} className='bg-gray-50' onChange={e=>setuserdata(prev=>({...prev , Address:{...prev.Address , line2:e.target.value} }))} /></p> : <p className='text-gray-500'>{userdate.Address.line1} <br/> {userdate.Address.line2}</p>
    }


  </div>
</div>
<div>
  <p className='text-neutral-500 underline mt-3' >BASIC INFORMATION</p>
  <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700' >
    <p className='font-medium'>Gender:</p>
    {
  isedit?<select className='max-w-28 bg-gray-100' onChange={(e)=>setuserdata(prev=>({...prev ,gender:e.target.value }))}>
    <option value="Male">Male</option>
     <option value="Female">Female</option>
  </select>
  
  :<p className='text-gray-400'>{userdate.gender}</p>
}

<p className='font-medium'>DOB</p>
{
  isedit?<input  className='max-w-28 bg-gray-100' type='date' value={userdate.dob} onChange={(e)=>setuserdata(prev=>({...prev , dob:e.target.value}))}></input> : <p className='text-gray-400'>{userdate.dob}</p>
}
  </div>
</div>
<div className='mt-10'>
  {
    isedit?<button className='border border-primary px-8 py-2 rounded-full hover:text-white hover:bg-primary transition-all' onClick={()=>Setisedit(false)}>Save Information</button> : <button  className='border border-primary px-8 py-2 rounded-full  hover:text-white hover:bg-primary transition-all' onClick={()=>Setisedit(true)} >Edit</button>
  }
</div>
    </div>
  )
}

export default Myprofile