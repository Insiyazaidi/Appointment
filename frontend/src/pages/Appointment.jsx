import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../Context/Appcontext'
import { assets } from '../assets/assets'
import { use } from 'react'

const Appointment = () => {      {/*  YHA PR EK HI DOCTOR H TOH MAP LGANE KI ZAROORAT NHI HAII  */}
  const {docId}= useParams()   ;    {/*  docId likha h route m toh yha bhi aise hi likhna h .. docid nhi likh skte  */}
  console.log(docId)
  const [docslots , Setdocslots] = useState([])
    const [slotindex , Setslotindex] = useState(0)
     const [slottime , Setslottime] = useState('')
  const {doctors , currencysymbol} = useContext(AppContext)
  const [docinfo , Setdocinfo] = useState(null)
  const fetchDocInfo = async()=>{
const docinfo = doctors.find(doc=>doc._id===docId)
Setdocinfo(docinfo)

  }

  const getavailableslots=()=>{
Setdocslots([])
let today = new Date()
for(let i=0; i<7; i++){
  let currdate = new Date(today)
  currdate.setDate(today.getDate()+i)
  let endtime = new Date()
   endtime.setDate(today.getDate()+i)
   endtime.setHours(21 ,0,0,0)
   if(today.getDate()===currdate.getDate()){
    currdate.setHours(currdate.getHours()>10 ?currdate.getHours()+1:10)
    currdate.setMinutes(currdate.getMinutes()>30?30:0)
   }
   else{
    currdate.setHours(10)
    currdate.setMinutes(0)
   }

   let timeslots = []
   while(currdate<endtime){
    let formattedtime = currdate.toLocaleTimeString([] , {hours:'2-digit' , minute:'2-digit'})
    timeslots.push({
      datetime:new Date(currdate) ,
      time:formattedtime
    })
    currdate.setMinutes(currdate.getMinutes()+30)
   }
   Setdocslots(prev=>([...prev , timeslots]))
}
  }


  useEffect(()=>{
fetchDocInfo ()
  } , [doctors , docId])


  useEffect(()=>{
    getavailableslots()
  } , [docinfo])

  useEffect(()=>{
    console.log(docslots)
  } , [docslots])

  return docinfo &&  (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
<div>
  <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docinfo.image}></img>
</div>
<div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
  <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docinfo.name} <img className='w-5' src={assets.verified_icon}></img></p>
  <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
    <p>{docinfo.degree} - {docinfo.speciality}</p>
    <button className='py-0.5 px-2 border text-xs rounded-full'>{docinfo.experience}</button>
  </div>
  <div >
    <p className=' flex items-center gap-1 text-sm font-medium text-gray-900'>About <img src={assets.info_icon}></img></p>
    <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docinfo.about}</p>
  </div>
<p className='text-gray-500 font-medium mt-4'>Appointment fee:<span className='text=gray-700'>{currencysymbol}{docinfo.fees}</span></p>
</div>
      </div>



    </div>
  )
}

export default Appointment