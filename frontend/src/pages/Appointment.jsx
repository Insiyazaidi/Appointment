import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useParams } from 'react-router'
import { AppContext } from '../Context/Appcontext'

const Appointment = () => {

   let {docid} = useParams()
   const [docinfo , Setdocinfo] = useState(null)
   let {doctors , currencysymbol} = useContext(AppContext)
const  fetcdocinfo = async()=>{
  const docinfo = doctors.find(doc=>doc._id ===docid)
  Setdocinfo(docinfo)

}
  return (
   
    <div>




    </div>
  )
}

export default Appointment