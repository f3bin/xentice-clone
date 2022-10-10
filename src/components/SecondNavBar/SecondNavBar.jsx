import "./SecondNavBar.css"
import {MenuItems} from "../../datas/MenuItems.js";

const SecondNavBar =()=>{
    return(
<>
<nav className="second-main-nav">
{/* Menu Items */}
<div >
<ul className="second-nav-menu">
 {MenuItems.map((Item,Index)=>{
    return(
        <li> <a className={Item.cName} href={Item.url}>{Item.name}</a></li>
    )

 })}
</ul>
</div>
</nav>

</>
    );
}

export default SecondNavBar;