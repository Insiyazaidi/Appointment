import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../Context/Appcontext'
import { assets } from '../assets/assets'

const Appointment = () => {      {/*  YHA PR EK HI DOCTOR H TOH MAP LGANE KI ZAROORAT NHI HAII  */}
  const {docId}= useParams()
  console.log(docId)
  const {doctors} = useContext(AppContext)
  const [docinfo , Setdocinfo] = useState(null)

  const fetchDocInfo = async()=>{
const docinfo = doctors.find(doc=>doc._id===docId)
Setdocinfo(docinfo)
console.log(docinfo)
  }

  useEffect(()=>{
fetchDocInfo ()
  } , [doctors , docId])


  return docinfo &&  (
    <div>
      <div>
<div>
  <img src={docinfo.image}></img>
</div>
<div>
  <p>{docinfo.name} <img src={assets.verified_icon}></img></p>
  <div>
    <p>{docinfo.degree} - {docinfo.speciality}</p>
    <button>{docinfo.experience}</button>
  </div>

</div>
      </div>



    </div>
  )
}

export default Appointment