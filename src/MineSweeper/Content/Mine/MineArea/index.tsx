import Styles  from '../../../CSS/MineSweeper.module.css';


const MineArea = ({children,x,y} : { children : JSX.Element, x:number , y:number}) => {
    return (
        <div className={`${Styles.MineArea}`}
        style={{/*gridArea : `${x} / ${y} / 1 / 1`*/gridColumn : x,gridRow : y}} 
        >
            {children}
        </div>
    )
}


export default MineArea;