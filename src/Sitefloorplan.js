import React from "react";
import FloorDialog from './FloorDialog';

const Sitefloorplan = () => {
  return (
    <div
    className="floorplan">
      
      <h2 style={{ textAlign: "center",textDecoration: "underline", marginBottom:'40px'}}>Master Plan & Floor Plan</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="pricecheckbox">
          <img
            src="https://i.imgur.com/n79ZdZA.jpg"
            style={{
              height: "85%",
              width: "100%",
              position: "relative",
              zIndex: "0",
              borderBottomLeftRadius:"120px",
              borderRadius:"20px",
              filter:"blur(0px)",
              objectFit:"cover"
            }}
          />
          <div style={{textAlign:"center",fontWeight:"600",padding:"5px"}}></div>
       <div className="floorplanbutton">
            <button style={{color:"white",padding:"5px"}}><FloorDialog/></button>
          </div>
        </div>

        <div
         className="pricecheckbox"
        >
          <img
            src="https://i.imgur.com/tdfD2ob.jpg"
            style={{
              height: "85%",
              width: "100%",
              position: "relative",
              zIndex: "0",
              borderBottomLeftRadius:"120px",
              borderRadius:"20px",
             
            }}
          />
          <div style={{textAlign:"center",fontWeight:"600",padding:"5px"}}></div>
         <div className="floorplanbutton"
            
          >
            <button style={{color:"white",padding:"5px"}}><FloorDialog/></button>
          </div>
        </div>

        <div
        className="pricecheckbox"
         
        >
          <img
            src="https://i.imgur.com/IuP2iwG.jpg"
            style={{
              height: "85%",
              width: "100%",
              position: "relative",
              zIndex: "0",
              borderBottomLeftRadius:"120px",
              borderRadius:"20px",
              filter:"blur(0px)",
              objectFit:"cover"
            }}
          />
          <div style={{textAlign:"center",fontWeight:"600",padding:"5px"}}></div>
        
          <div className="floorplanbutton"
          >
            <button style={{color:"white",padding:"5px"}}><FloorDialog/></button>
          </div>
        </div>

     
       
        </div>

        
      </div>
    
    
  );
};

export default Sitefloorplan;
