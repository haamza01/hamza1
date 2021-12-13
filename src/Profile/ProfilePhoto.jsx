

import img from "../img+vid/img1.jpg";

function Photo () {

    return (
    <div>
      <div class="overlay"></div>
        <div class="text">
            <div className="img1">
                <img src={img} alt="images" width="180px" height="180px"/>
            </div>
         <h2> HAMZA </h2>
         <h3>BEN ALI</h3>
          <p>
                Avenue Khaled Ibn Walid La Manouba
          </p>
            <a href="#">portfolio</a>
        </div>
    </div>  
    )
    
}
export default Photo