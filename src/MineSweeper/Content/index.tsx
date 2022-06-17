import { MutableRefObject, useContext, useEffect, useMemo, useRef, useState } from "react";
import StatusContext from "../Context";
import Styles  from '../CSS/MineSweeper.module.css'
import { MineInfomation, Status, StatusContextType, StatusType } from "../types";
import Mine from "./Mine";



const Content = () => {

    // 모든 행
    const maxColumn = 10;
    // 모든 열
    const maxRow = 10;

    const context = useContext<StatusContextType>(StatusContext);

    // 20개 넣기로함
    const requestMine : number = 20;

    const SetStatus = () => {
        console.log("DisPatcher 수신됨 Content");
    }

    useEffect(() => {
        console.log("Content 렌더링");    
        if(!context.Status.current.SetStatus) context.Status.current.SetStatus = [];
        context.Status.current.SetStatus.push(SetStatus);
    },[context])

    const OnMouseEnterEvent = () => {
        if(context.Status.current.Status === "Death") return undefined;
        context.DispatcherStatus('OnMouse');
    }
    const OnMouseLeaveEvent = () => {
        if(context.Status.current.Status === "Death") return undefined;
        context.DispatcherStatus("Idle");
    }

    const MineArray : JSX.Element[] = useMemo(() => {
        console.log('GroupMine 생성');

        const MineArray : Array<Array<MineInfomation>> = new Array(10);
        MineArray.fill(new Array(10));


        //최소한 필요한 지뢰를 생성합니다
        const columnLength : number = Math.floor(maxColumn / 3 + maxColumn % 3);
        const rowLength : number = Math.floor(maxRow / 3 + maxRow % 3);
        let totalMineCount = 0;

        const SetUpMine = () => {
            for(let i = 1; i <= columnLength; i++ ){
                let x = 1 + (i - 1) * 3;
                for(let j = 1; j <= rowLength; j++){
                    let y = 1 + (j - 1) * 3;
                    y = y == maxRow ? y - 1 : y;
                    MineArray[x][y] = {X : x,Y : y,isMine : true,value : 0};

                    totalMineCount++;
                }
            }
        }
        SetUpMine();

        const MakingMine = () => {
            console.log("총 지뢰갯수 :",totalMineCount);
        }
        MakingMine();

        const ValueArray : JSX.Element[] = [];

        for(let i = 0; i < maxColumn; i++){
            let x : number = i + 1;
            
            for(let j = 0; j < maxRow; j++){
                let y : number = j + 1;

                ValueArray.push(<Mine key={`Mine_${x}_${y}`} isMine={false} number={5} x={x} y={y}/>);
            }
        }
        
        return ValueArray;
    },[]);

    return (
        <div id={Styles.MineSweeperContent} >
            <div id={Styles.MineContainer} onMouseEnter={OnMouseEnterEvent} onMouseLeave={OnMouseLeaveEvent}>
                {MineArray.map((value) => value)}
            </div>
        </div>
    )
}


export default Content;