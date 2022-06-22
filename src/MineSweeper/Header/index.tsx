import Face from "./Face";
import Styles  from '../CSS/MineSweeper.module.css'
import { useContext } from "react";
import { StatusContextType } from "../types";
import { StatusContext } from "../Context";

const Header = () => {

    return (
        <div id={Styles.MineSweeperHeaderContainer}>
            <div id={Styles.MineSweeperHeader}>
               { <Face /> }
            </div>
        </div>
    )
}


export default Header;