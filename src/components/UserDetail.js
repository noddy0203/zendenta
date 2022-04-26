import React from 'react';
import Chandni from "../chandni.jpg";
import { useGlobalContext } from '../context';
const UserDetail = () => {
   const {patient} = useGlobalContext()
  return (
    <>
      <div className="user_photo">
        <div className="photo_name">
          <img src={Chandni} alt="..chndni" className='userImage' />
          <p className='section_name'>{patient.name}</p>
          <p className='section_mail'>{patient["e-email"]}</p>
        </div>
        <div className="post_tweet">
          <div className="posted">
            <p className='posted_number'>{patient.Past}</p>
            <p className='post_status'>Posts</p>
          </div>
          <div className="upcoming">
            <p className='upcoming_number'>{patient.Upcoming}</p>
            <p className='upcoming_status'>Upcoming</p>
          </div>
        </div>
        <div className="msg_btn">
          <button>Send Message</button>
        </div>
      </div>
      <div className="user_detail">
        <table>
          <tr>
            <td>
              <p className='upper_para'>Gender</p>
              <p className='lower_para'>{patient.Gender}</p>
            </td>
            <td>
              <p className="upper_para">Birthday</p>
              <p className='lower_para'>{patient.Birthday}</p>
            </td>
            <td>
              <p className='upper_para'>Phone</p>
              <p className='lower_para'>{patient["Phone Number"]}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className='upper_para'>Street Address</p>
              <p className='lower_para'>{patient["Street Address"]}</p>
            </td>
            <td>
              <p className='upper_para'>City</p>
              <p className='lower_para'>Cilacap</p>
            </td>
            <td>
              <p className='upper_para'>ZIP code</p>
              <p className='lower_para'>{patient["ZIP Code"]}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className='upper_para'>Member Status</p>
              <p className='lower_para'>{patient["Member Status"]} </p>
            </td>
            <td>
              <p className='upper_para'>Registration Date</p>
              <p className='lower_para'>{patient["Register Date"]}</p>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default UserDetail