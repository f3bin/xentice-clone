import "./BodySearchBox.css"
import { MenuItems, CityNames } from "../../datas/MenuItems"
import { useState } from "react";


const BodySearchBox = () => {

    const [menu, setMenu] = useState("Looking for ");
    const [cityName, setCityName] = useState("Select City ");

    const handleMenu = (event) => {
        setMenu(event.target.value);
    }
    const handleCity = (event) => {
        setCityName(event.target.value);
    }

    return (
        <>
            <div className="container" >
                <div className="form-background">
                    <h1>Choose from 25,00+ <br /> spaces for your <br /> buisness</h1>
                    <p>Get inspired and find your perfect place.</p>
                    <form className="form-items">
                        <select className="dropdown-button" value={menu} onChange={handleMenu}>
                            {MenuItems.map((menuItem) => {
                                return (
                                    <option value={menuItem.name}>{menuItem.name}</option>
                                );
                            })}
                        </select>
                        <select className="dropdown-button" value={cityName} onChange={handleCity}>
                            {CityNames.map((cityItem) => {
                                return (
                                    <option value={cityItem.name}>{cityItem.name}</option>
                                );
                            })}
                        </select>
                        <button className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BodySearchBox;