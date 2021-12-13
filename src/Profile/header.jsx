import video from "../img+vid/vid1.mp4";



function Header (){


    return(
      <div>
       <header>
           <h2 className="logo">Checkpoint React </h2>
           <div className="toggle"></div>
       </header>
          <video src={video} muted loop autoPlay />
          
            
      </div>
    )
}
export default Header