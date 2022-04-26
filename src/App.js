import React from 'react'
import BelowHeader from './components/BelowHeader'
import Header from './components/Header'
import Navbar from './components/Navbar'
import UserDetail from './components/UserDetail'
import Appointment from './components/Appointment'
import Notes from './components/Notes'
const App = () => {
  return (
    <>
     <div className='app'>
       <Navbar />
       <div className="main_section">
       <Header />
       <BelowHeader/>
       <div className="partition">
         <div className="left_div">
           <div className="upper_left">
            <UserDetail/>
           </div>
           <div className="lower_left">
             <Appointment/>
           </div>
         </div>
         <div className="right_div">
          <Notes />
         </div>
       </div>
       </div>
     </div>

    </>
  )
}

export default App