import React from 'react'
import {IoIosArrowForward} from "react-icons/io"
import {AiOutlinePrinter} from "react-icons/ai"
import {BiMessageEdit} from "react-icons/bi"
const BelowHeader = () => {
  return (
    <>
       <div className="patientList_navigation">
           <div className="navigation_content">
               <p>Patient list</p>
               <IoIosArrowForward className='arrow_icon' />
               <p className='list_patient_name'>Diane Cooper</p>
           </div>
           <div className="print">
              <AiOutlinePrinter className='print_icon'/>
              <div className="edit">
                <BiMessageEdit className='edit_icon'/>
                 <p className='edit_profile'>Edit Patient</p>
              </div>
           </div>
       </div>
    </>
  )
}

export default BelowHeader