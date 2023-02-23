import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Dialog} from '@mui/material'
import {useNavigate} from 'react-router-dom';
const Dialogbox = () => {
   
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const form = useRef();
  const navigate=useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dwi8um6', 'template_vh2lnie', form.current, '35jxlMRE2-DZ_dIhv')
      .then((result) => {
          console.log(result.text);
          navigate("/Thankyou")
      }, (error) => {
          console.log(error.text);
      });
  };
 
  

  return (
    <div >
      <div  style={{padding:"1px",borderRadius:"10px",fontSize:"15px",fontWeight:"500",color:"white"}} onClick={handleClickOpen}>Schedule a Visit
      </div>
      <Dialog open={open} onClose={handleClose}>
     
      <div >
      <div>
        <div>
          <div style={{height:"360px",width:"280px",border:"5px solid #161a2d",textAlign:"center"}}>
            <h2 style={{marginTop:"20px"}}>To Schedule A Visit</h2>
           
            <div >
           
      
            <form ref={form} onSubmit={sendEmail}>
    
      <input type="text" name="user_name" placeholder=' Enter your name'  required style={{height:"50px",width:"250px",border:"1px solid #161a2d",margin:"5px"}}/>
      
      <input type="text"  name="contact_number" placeholder='Contact number' required title="Error Message" pattern="[1-9]{1}[0-9]{9}" style={{height:"50px",width:"250px",border:"1px solid #161a2d",margin:"5px"}}/>
     
      <input type='email' name="user_email" placeholder='Email Id' required style={{height:"50px",width:"250px",border:"1px solid #161a2d",margin:"5px"}}/>

      <input type="submit" value="Send" required style={{height:"35px",width:"100px",margin:"15px",background:"#161a2d",color:"white",fontSize:"20px",borderRadius:"5px",marginLeft:"15px"}}/>
    </form>
 
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
 
       
      </Dialog>
    </div>
  );
}

export default Dialogbox ;