import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Overview from './Overview';
import Price from './Price';
import Sitefloorplan from './Sitefloorplan';
import Gallery from './Gallery';
import Location from './Location';
import Virtualsite from './Virtualsite';
import About from './About';
import Banner from './Banner';
import Footer from './footer';
const Body = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dwi8um6', 'template_vh2lnie', form.current, '35jxlMRE2-DZ_dIhv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <>
    <div style={{display:"flex",width:"100%",Height:"100%"}}>
    <div  className='main'>
        <Banner/>
        <Overview />
     <Price />
        <Sitefloorplan />
        <Gallery />
        <Location />
        <Virtualsite />
        <Footer />
        </div>
    <div style={{width:"22%",background:"white",float:"Right",height:"100vh",position:"fixed",right:"0",marginTop:"-80px",padding:"10px"}} className='sidebar'>
      <div style={{display:"flex",marginLeft:"0px"}}>
      <div style={{background:"#434343",width:"55%",height:"55px",margin:"0px",borderBottomLeftRadius:"30px",borderRight:"1px solid white",color:"white",padding:"5px",display:"flex"}}>
        <div style={{fontSize:"18px"}}><img src="https://i.imgur.com/tWQVbyr.png" style={{width:"35px",textAlign:"center"}}/></div>
        <div style={{fontSize:"15px",textAlign:"center",fontWeight:"500"}}>Organize Site Visit</div>
        </div>
      <div style={{background:"#434343",width:"45%",height:"55px",margin:"0px",borderBottomRightRadius:"30px",color:"white",padding:"5px"}}><img src="https://i.imgur.com/hw5F4AO.png" style={{width:"18px"}}/> <span style={{fontSize:"15px",fontWeight:"500"}}>WhatsApp</span></div>
      </div>
      <div style={{marginTop:"60px",width:"100%",textAlign:"center",fontSize:"20px"}}>Pre-Register Here For Best Offers</div>
      <div style={{fontSize:"18px",fontWeight:"700",background:"white",boxShadow:"5px 10px #888888",padding:"10px",height:"40%",borderRadius:"20px",marginTop:"30px"}}>
   
      <form ref={form} onSubmit={sendEmail}>
    
      <div style={{margin:"20px"}}><input type="text" name="user_name" placeholder=' Enter your name'  required  style={{width:"100%",height:"40px",borderRadius:"5px",padding:"10px"}}/></div>
      
      <div style={{margin:"20px"}}><input type="text"  name="contact_number" placeholder='Contact number' required title="Error Message" pattern="[1-9]{1}[0-9]{9}" style={{width:"100%",height:"40px",borderRadius:"5px",padding:"10px"}}/></div>
     
      <div style={{margin:"20px"}}><input type='email' name="user_email" placeholder='Email Id' required  style={{width:"100%",height:"40px",borderRadius:"5px",padding:"10px"}}/></div>

      <div style={{margin:"20px"}}><input type="submit" value="Send" required style={{height:"35px",width:"100px",margin:"1px",background:"#161a2d",color:"white",fontSize:"20px",borderRadius:"5px",marginLeft:"15px"}}/></div>
    </form>
        
    </div>
    
    </div>
    </div>

    </>
    
  )
}

export default Body