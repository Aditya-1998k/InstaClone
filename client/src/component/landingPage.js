import { Link } from "react-router-dom";
import "./landingPage.css"
const LandingPage=()=>{
    return(
        <>
        <div id="landing1">
         <img id="image_landing" src="https://images.unsplash.com/photo-1658349980996-c1ffb4bfe4b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="unsplash"/>
         </div>
         <div id="landing2">
         <Link to="/postview" id="button_link_landing">CLICK TO ENTER</Link>
        </div>
        
        </>
    )
}

export default LandingPage;