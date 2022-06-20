import { createContext } from "react";


const StatusContext = createContext<any>(null);
const MineContext = createContext<any>(null);

export {MineContext,StatusContext};