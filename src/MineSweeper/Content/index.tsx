import { useContext, useEffect, useMemo, useRef, useState } from "react";
import {StatusContext} from "../Context";
import Styles  from '../CSS/MineSweeper.module.css'
import { CreateMine } from "../tool";
import { MineInfomation, StatusContextType } from "../types";
import Mine from "./Mine";



const Content = () => {

    // 모든 행
    const maxColumn = 15;
    // 모든 열
    const maxRow = 15;
    // 지뢰 갯수 ( 최소 제외 )
    const requestMine : number = 20;
    

    const context = useContext<StatusContextType>(StatusContext);
    
    const OnMouseEnterEvent = () => {
        if(context.Status.current.Status === "Death") return undefined;
        context.DispatcherStatus('Header','OnMouse');
    }
    const OnMouseLeaveEvent = () => {
        if(context.Status.current.Status === "Death") return undefined;
        context.DispatcherStatus('Header',"Idle");
    }

    const MineArray = useMemo(() => CreateMine(maxColumn,maxRow,requestMine),[]);

    return (
        <div id={Styles.MineSweeperContent} >
            <div id={Styles.MineContainer} onMouseEnter={OnMouseEnterEvent} onMouseLeave={OnMouseLeaveEvent}>
                {MineArray.map((value) => value)}
            </div>
        </div>
    )
}


export default Content;