import React from 'react'
import { useGlobalContext } from '../context'
const Appointment = () => {
  const {doctor} = useGlobalContext()
   console.log(doctor["Upcoming Appointments"].Nurse)
  return (
    <> 
    <div className="section">
      
    </div>
      <ul className='patient_submenu'>
           <li>Upcoming Appointments</li>
           <li>Past Apppointments</li>
           <li>Medical Records</li>
      </ul>
      <aside>
          <ul className='appointment_list'>
            <li className='appoint_list'>
              <div>
              <p>26 Nov 2016</p>
              <p className='time'>9.00-10.00</p>
              </div>
              <div>
              <p className='treatment'>Treatment</p>
              <p className='treatment_name'>{doctor["Upcoming Appointments"].Treatment}</p>
              </div>
              <div>
                <p className='dentist'>Dentist</p>
                <p className='dentist_name'>{doctor["Upcoming Appointments"].Dentist}</p>
              </div>
              <div>
                <p className='nurse'>Nurse</p>
                <p className='nurse_name'>{doctor["Upcoming Appointments"].Nurse}</p>
              </div>
            </li>
          </ul>
      </aside>
    </>
  )
}

export default Appointment