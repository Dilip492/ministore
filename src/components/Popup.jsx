import React from 'react'
// import { use } from '../../../backend/routes/auth'
import { useNavigate } from 'react-router-dom'

export const Popup = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* 
         <div className="popup">


           <div className="mini-con">
           <img src={check} alt="" />


            <h1>welcome to {props.name}</h1>
            <p>Go to home page</p>
            <button></button>
           </div>
            
         </div> */}

      <div className="popup-overlay">
        <div className="popup-container">

          <button className="close-button" >
            &times;
          </button>
          <div className="popup-message">
            <h1>Welcome to Ministore </h1>
            <p>
              Your account is created. Dive in and explore

            </p>
          </div>
          <button onClick={() => navigate('/')} className='popup-btn'>Go to home</button>
        </div>
      </div>


    </div>
  )
}
