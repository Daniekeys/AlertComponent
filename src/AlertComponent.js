import React,{useState} from 'react'
import './AlertComponent'
const AlertComponent = ({showAlert, message}) => {
 // const [showAlert, setShowAlert] = useState(false);
 // setTimeout(() => {
 //  setShow(false);
 // }, 4000);
 // const handleAlert = () => {
 //  setShow(!showAlert);
 // }
 return (
  <div>
    {/* <button onClick={handleAlert}>Add Link</button> */}
    <div className={showAlert? 'alert showAlert' : 'alert' }>
      <span id="icon" className="fas fa-check"></span>
      <span className="msg">{message}</span>
    </div>
  </div>
 )
}

export default AlertComponent


