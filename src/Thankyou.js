import React from 'react';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
 
const navigate=useNavigate()
  
  return (
    <div style={{marginTop:'10px',width:"95%"}}>
             <div className='ThankyouPageBox' >
        <h1><img src='https://i.imgur.com/JGWj4Bs.png' style={{height:"60%",width:"100%"}}/></h1>
      
            <div className="thankyoutext">Thank you for showing interest in FairFox Eon. We have received your Query & will get back to you soon as possible.
            In the meantime,if you can Call or WhatsApp us </div>
            <div style={{width:"50%",height:"20%",marginLeft:'18%',marginTop:"2%"}}>
            <h3 style={{fontSize:"25px",marginLeft:'30%',textAlign:"center"}}>+91 8130306040</h3>
           
            </div>
            </div>
           <button style={{background:"orange",width:"30%",height:"20%",marginLeft:'40%',marginTop:"2%",borderRadius:"10px",fontSize:"25px",marginTop:"15px"}}  onClick={() => navigate('/')}> Back To Site</button>
    </div>
  )
}

export default Thankyou;