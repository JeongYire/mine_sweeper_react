import { MutableRefObject } from "react";

export type StatusType = 'OnMouse' | 'Death' | 'Idle'

export type Status = {
    Status : StatusType,
    SetFaceStatus : Function | undefined,
    SetContentStatus : Function | undefined,
}

export type StatusContextType = {
    Status : MutableRefObject<Status>;
    DispatcherStatus : (target : SectionType,value : StatusType) => void;
}


export type SectionType = 'Header' | 'Content' | 'All';


export type MineInfomation = {
    x : number,
    y : number,
    isMine : boolean,
    value : number
}


export type MineStatus = 'idle' | 'isFlag' | 'explosion' | 'dugUp';
