import { useContext, useState } from 'react';
import StatusContext from '../../../Context';
import Styles  from '../../../CSS/MineSweeper.module.css';
import { MineStatus } from '../../../types';

const Mine = ({number,isMine}:{number : number | undefined,isMine : boolean}) => {

    const DispatcherEvent = useContext(StatusContext).DispatcherStatus;
    const [mineStatus,SetMineStatus] = useState<MineStatus>('idle');

    return (
        <div className={`${Styles.Mine} ${Styles[mineStatus]}`} 
        onContextMenu={(e) => {
            e.preventDefault();
            if(mineStatus == 'explosion') return;
            SetMineStatus('isFlag')
            }
            }
        onClick={() => {
            if(isMine) return SetMineStatus('explosion');
            SetMineStatus('dugUp');
        }}
            >
            {mineStatus == 'dugUp' && <span>{number as number}</span>}
        </div>
    )
}


export default Mine;