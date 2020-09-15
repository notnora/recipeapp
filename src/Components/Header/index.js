import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import "./style.css"
import logo from "../../imgs/useuringr-01.svg"

export const Header = props => {
    return(
        <div className="Header">
            <img src={logo}/>
            <h2> Use Your Ingredients!</h2>
        </div>
    );
};
export default Header