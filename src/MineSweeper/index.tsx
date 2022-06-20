import { useCallback, useEffect, useRef } from "react";
import Content from "./Content";
import {StatusContext} from "./Context";
import Header from "./Header";
import Styles from './CSS/MineSweeper.module.css'
import { SectionType, Status, StatusContextType, StatusType } from "./types";

const MineSweeper = () => {
    const status = useRef<Status>({Status : "Idle",SetMineStatus : undefined,SetFaceStatus : undefined});

    const DispatcherStatus = useCallback((target : SectionType,value : StatusType) => {
        status.current.Status = value;

        switch (target) {
            case 'Header':
                status.current.SetFaceStatus?.();
                break;
            case 'All' :
                status.current.SetFaceStatus?.();
                if(status.current.SetMineStatus !== undefined){
                    const events = status.current.SetMineStatus as Function[];
                    let length = events.length;
                    for(let i = 0; i < length; i++){
                        events[i]();
                    }
                }
                break;
        }
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

