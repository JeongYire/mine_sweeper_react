import { useCallback, useEffect, useRef } from "react";
import Content from "./Content";
import StatusContext from "./Context";
import Header from "./Header";
import Styles from './CSS/MineSweeper.module.css'
import { Status, StatusContextType, StatusType } from "./types";

const MineSweeper = () => {
    const status = useRef<Status>({Status : "Idle",SetStatus : undefined});

    const DispatcherStatus = useCallback((value : StatusType) => {
        if(!status.current.SetStatus) return;
        status.current.Status = value;
        status.current.SetStatus.forEach(method => method());
    },[]);

    const StageContext : StatusContextType = {
        Status : status,
        DispatcherStatus : DispatcherStatus
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

