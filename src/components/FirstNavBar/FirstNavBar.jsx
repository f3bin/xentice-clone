import "./FirstNavBar.css" 
import { FaBars } from 'react-icons/fa';

 
 const FirstNavBar= ()=>{
    return(
<>
    <div className="first-main-nav">
    {/* Adding fabar from react icons */}
    <div className="fabars-icon">
       <FaBars />
    </div>
         {/* Logo part */}
        <div className="first-nav-logo">
            <h2 className="logo">Xentice</h2>
        </div>

         {/* Header menu part */}
        <div >
           <ul className="first-nav-menu">
            <li className="first-nav-items"><a href="#"></a>Post Ad</li>
            <li className="first-nav-items"><a href="#"></a>Near Me</li>
            <li className="first-nav-items"><a href="#"></a>Login/SignUp</li>
           </ul>
        </div>
    </div>
</>
    )  ;
 }

 export default FirstNavBar;