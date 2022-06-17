import { MutableRefObject } from "react";

export type StatusType = 'OnMouse' | 'Death' | 'Idle'

export type Status = {
    Status : StatusType,
    SetStatus : Function[] | undefined
}

export type StatusContextType = {
    Status : MutableRefObject<Status>;
    DispatcherStatus : (value : StatusType) => void;
}



export type MineInfomation = {
    X : number,
    Y : number,
    isMine : boolean,
    value : number
}


export type MineStatus = 'idle' | 'isFlag' | 'explosion' | 'dugUp';
