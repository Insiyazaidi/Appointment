import React, { useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../Context/Appcontext'
import { useEffect } from 'react'
import { assets } from '../assets/assets'
import Relateddoctors from '../Components/Relateddoctors'
const Appointment = () => {
  const {docId } = useParams()
  console.log(docId)
const daysofweek = ['SUN' , 'MON' , 'TUE' , 'WED' , 'THUR' , 'FRI' ]
const {doctors , currencysymbol} = useContext(AppContext)
const [docinfo , Setdocinfo] = useState(null)
const [docslots , Setdocslots]=useState([])
const [slotindex , Setslotindex] = useState(0)
const [slottime , Setslottime] = useState("")
const fetchdocinfo = async()=>{
const docinfo = doctors.find(doc=>doc._id === docId)
Setdocinfo(docinfo)

}

const getavailableslot = async ()=>{
Setdocslots([])
let today = new Date();

for(let i=0;i<7;i++){
  let currdate = new Date(today)

currdate.setDate(today.getDate()+i)
let endtime = new Date()
endtime.setDate(today.getDate()+i)
endtime.setHours(21 ,0,0,0)
if(today.getDate()===currdate.getDate()){
  currdate.setHours(currdate.getHours()>10?currdate.getHours()+1:10)
  currdate.setMinutes(currdate.getMinutes()>30?  currdate.getMinutes()+30:0)
}
else{
  currdate.setHours(10)
currdate.setMinutes(0)
}

let timeslots =[]
while(currdate<endtime){
  let formattedtime = currdate.toLocaleTimeString([] , {hour:'2-digit' , minute:'2-digit'})
  timeslots.push({
    datetime: new Date(currdate),
    time:formattedtime
  })
  currdate.setMinutes(currdate.getMinutes()+30)
}
Setdocslots(prev=>([...prev, timeslots]))
}
}

useEffect(()=>{
fetchdocinfo()
} , [doctors , docId])

useEffect(()=>{
  getavailableslot()
} , [docinfo ])
 
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
  <p className='flex items-center gap-2 text-2xl font-medium text-gray-900 '>{docinfo.name} <img className='w-5'  src={assets.verified_icon}></img></p>
  <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
    <p >{docinfo.degree} - {docinfo.speciality}</p>
    <button className='py-0.5 px-2 border text-xs rounded-full '>{docinfo.experience}</button>
  </div>

<div>
  <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 '>About <img src={assets.info_icon}></img></p>
  <p className='text-sm text-gray-500 max-[700px] mt-1' >{docinfo.about}</p>
</div>

<p className='text-gray-500 font-medium mt-4' >Appointment fee:<span className='text-gray-800 ' > {currencysymbol}{docinfo.fees}</span></p> 


</div>


</div>

<div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
<p>Booking Slots</p>
<div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
  {
    docslots.length && docslots.map((item , index )=>(
      <div onClick={()=>Setslotindex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex===index? 'bg-primary text-white ':'border border-gray-200' }`}>
        <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
        <p>{item[0] && item[0].datetime.getDate()}</p>
      </div>
    ))
  }
</div>

<div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
{docslots.length && docslots[slotindex].map((item , index)=>(
<p onClick={()=>Setslottime(item.time)}  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slottime?'bg-primary text-white' : 'text-gray-400 border border-gray-300' }`}  key={index}>
  {item.time.toLowerCase()}
</p>
))}


</div>

<button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full mt-9'></button>
</div>

<Relateddoctors docId={docId} speciality={docinfo.speciality}/>

    </div>
  )
}

export default Appointment