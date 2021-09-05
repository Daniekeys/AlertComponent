import React,{useState} from 'react'

import AlertComponent from './AlertComponent'
const AlertExample = () => {

  const [showAlert, setShowAlert] = useState(false);

   setTimeout(() => {
  setShowAlert(false);
 }, 4000);

 const handleAlert = () => {
  setShowAlert(!showAlert);
 }
 return (
  <div>
   <button onClick={handleAlert}>
   Login
   </button>
   <AlertComponent showAlert={showAlert} message={"Added Successfully"}  />
  </div>
 )
}
export default AlertExample
