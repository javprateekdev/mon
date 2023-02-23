import React from 'react';
import Dialog from './Dialog';


const Price = () => {
  return (
    <div className='container' id='price' >
    <div style={{margin:"10px"}}>
    <div></div><h2 style={{textAlign:"center",textDecoration: "underline"}}>Price</h2>
      
      </div>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    <div className='pricecontainer' >
    
        <div  className='pricetop1'>
        <img src="https://i.imgur.com/bzTJjUa.png" style={{height:"40px",width:"40px",position:"relative",zIndex:"0"}} />
    
        <span className='pricemargin'>Office Spaces</span>
        </div>
    <div style={{fontSize:"22px",marginTop:"3vh",textAlign:'center'}}>Carpet Area:</div>
    <div style={{textAlign:"center"}}>
    <b>500sq.ft – 10,00000 Sq.ft
</b></div>
    <div><button  className='pricebutton'><Dialog/></button></div>
        
    </div>
    <div className='pricecontainer'>
    <div  className='pricetop1' >
    <img src="https://i.imgur.com/bzTJjUa.png" style={{height:"40px",width:"40px"}} />
    <span className='pricemargin'>Retail Spaces</span>
    </div>
    <div style={{fontSize:"22px",marginTop:"3vh",textAlign:'center'}}>Carpet Area:</div>
    <div style={{textAlign:"center"}}>
    <b>300sq.ft – 100000sq.ft
</b></div>
    
    <div><button  className='pricebutton' ><Dialog/></button></div>
    </div> 
    </div>
    
    </div>
  )
}

export default Price