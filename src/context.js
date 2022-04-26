import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [patient, setPatient] = useState([]);
    const [appointment, setAppointement] = useState([]);
    const [doctor, setDoctor] = useState([]);
    
    const getData = ()=>{
        const patientDetail = "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails";
        const patientAppointment = "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details";
        const doctorDetail = "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails";
      const getPatient = axios.get(patientDetail)
      const getApppointment = axios.get(patientAppointment)
      const getDoctor = axios.get(doctorDetail)
      axios.all([getPatient, getDoctor,getApppointment]).then(
        axios.spread((...allData)=>{
            const getFirstPatient = allData[0].data[0]
            const getFirstAppointment = allData[1].data[0]
            const getFirstDoctor = allData[2].data[0]
            setPatient(getFirstPatient)
            setAppointement(getFirstAppointment)
            setDoctor(getFirstDoctor)
             // now set the setState and pass the props to different components
          })
      )}
      useEffect(()=>{
          getData()
      },[])
    const closeSideBar = () => {
        setIsSideBarOpen(true)
    }
    const openSideBar = () => {
        setIsSideBarOpen(false)
    }
    return (
        <AppContext.Provider value={{ isSideBarOpen, closeSideBar, openSideBar, patient, appointment, doctor }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

