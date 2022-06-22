import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import {StatusContext} from '../../../Context';
import Styles  from '../../../CSS/MineSweeper.module.css';
import { MineStatus, StatusContextType } from '../../../types';

const Mine = ({number,isMine}:{number : number | undefined,isMine : boolean}) => {
    const context = useContext<StatusContextType>(StatusContext);
    const DispatcherEvent = context.DispatcherStatus;
    const [mineStatus,SetMineStatus] = useState<MineStatus>('idle');

    if(context.Status.current.Status === 'Death'){
        if(isMine){
            return (
                <div className={`${Styles.Mine} ${Styles.explosion}`} />
            )
        }else{
            return (
                <div className={`${Styles.Mine} ${Styles.dugUp}`}>
                    <span>{number as number}</span>
                </div>
            )
        }
    }

    return (
        <div className={`${Styles.Mine} ${Styles[mineStatus]}`} 
        onContextMenu={(e) => {
            e.preventDefault();
            if(mineStatus === 'explosion') return;
            SetMineStatus('isFlag')
            }
            }
        onClick={() => {
            if(isMine) return DispatcherEvent('All','Death');
            SetMineStatus('dugUp');
        }}
            >
            {mineStatus === 'dugUp' && <span>{number as number}</span>}
        </div>
    )
}


export default Mine;