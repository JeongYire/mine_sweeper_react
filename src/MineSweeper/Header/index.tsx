import Face from "./Face";
import Styles  from '../CSS/MineSweeper.module.css'

const Header = () => {
    return (
        <div id={Styles.MineSweeperHeaderContainer}>
            <div id={Styles.MineSweeperHeader} >
               { <Face /> }
            </div>
        </div>
    )
}


export default Header;