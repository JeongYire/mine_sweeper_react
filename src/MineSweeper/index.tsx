import { useCallback, useEffect, useRef, useState } from "react";
import Content from "./Content";
import {StatusContext} from "./Context";
import Header from "./Header";
import Styles from './CSS/MineSweeper.module.css'
import { SectionType, Status, StatusContextType, StatusType } from "./types";
import { render } from "react-dom";

const MineSweeper = () => {

    const status = useRef<Status>({Status : "Idle",SetFaceStatus : undefined,SetContentStatus : undefined});
    

    const DispatcherStatus = useCallback((target : SectionType,value : StatusType) => {
        status.current.Status = value;

        switch (target) {
            case 'Header':
                status.current.SetFaceStatus?.();
                break;
            case 'All' :
                status.current.SetFaceStatus?.();
                status.current.SetContentStatus?.();
                break;
        }
    },[]);

    const StageContext : StatusContextType = {
        Status : status,
        DispatcherStatus : DispatcherStatus,
    }

    return(
        <div id={Styles.MineSweeperContainer}>
            <StatusContext.Provider value={StageContext}>
                <Header />
                <Content />
            </StatusContext.Provider>
        </div>
    )
}

export default MineSweeper;

