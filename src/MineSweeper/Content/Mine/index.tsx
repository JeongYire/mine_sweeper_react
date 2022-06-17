import Mine from "./Mine";
import MineArea from "./MineArea";


const CompleteMine = ({number,isMine,x,y}:{number : number | undefined,isMine : boolean,x : number,y : number}) => (
    <MineArea  x={x} y={y}>
        <Mine isMine={isMine} number={number}/>
    </MineArea>
)

export default CompleteMine;