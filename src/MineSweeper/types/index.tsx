import { MutableRefObject } from "react";

export type StatusType = 'OnMouse' | 'Death' | 'Idle'

export type Status = {
    Status : StatusType,
    SetFaceStatus : Function | undefined,
    SetMineStatus : Function[] | undefined,
}

export type StatusContextType = {
    Status : MutableRefObject<Status>;
    DispatcherStatus : (target : SectionType,value : StatusType) => void;
}


export type SectionType = 'Header' | 'All';


export type MineInfomation = {
    X : number,
    Y : number,
    isMine : boolean,
    value : number
}


export type MineStatus = 'idle' | 'isFlag' | 'explosion' | 'dugUp';
