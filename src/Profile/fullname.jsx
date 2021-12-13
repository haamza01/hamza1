
import img1 from "../img+vid/facebook.png";
import img3 from "../img+vid/instagram.png";
import img2 from "../img+vid/twitter.png";



function FullName () {

    return (

       <div>
           <ul className="social">
        <li>
          <a href="#"><img src={img1} /></a>
        </li>
        <li>
          <a href="#"><img src={img2} /></a>
        </li>
        <li>
          <a href="#"><img src={img3} /></a>
        </li>
      </ul>
       </div>



    )
    
}
export default FullName