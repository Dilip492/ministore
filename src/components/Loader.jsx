import React from 'react'
import { HashLoader } from "react-spinners"


export const Loader = () => {
    return (
        <div className='loader'>
            <HashLoader
       
               
                size={100}
                cssOverride={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin:'auto',
                    paddingTop:"670px",
                    
                  }}
          
            />
        </div>
    )
}
