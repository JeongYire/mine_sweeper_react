
import Mine from "../../Content/Mine";
import { MineInfomation } from "../../types";

const CreateMine = (maxColumn : number,maxRow : number,requestMine : number) => {

    const mineInfomationGroup : MineInfomation[] = [];
    const componentArray : JSX.Element[] = [];

    const MakingInfomation = () => {
        for(let i = 0; i < maxColumn; i++){
            let x : number = i + 1;

            for(let j = 0; j < maxRow; j++){
                let y : number = j + 1;

                mineInfomationGroup[(i * maxColumn) + j] = {X : x, Y : y, value : 0,isMine : false};

                //ValueArray.push(<Mine key={`Mine_${x}_${y}`} isMine={mineInfomation.isMine} number={mineInfomation.value} x={mineInfomation.X} y={mineInfomation.Y}/>);
            }
        }
    }
    MakingInfomation();


    const MakingColumn = () => {
        for(let i = 0; i < maxColumn; i++){
            let x : number = i + 1;
            for(let j = 0; j < maxRow; j++){
                let y : number = j + 1;
                const mineInfomation : MineInfomation = mineInfomationGroup[(i * maxColumn) + j];
                componentArray.push(<Mine key={`Mine_${x}_${y}`} isMine={mineInfomation.isMine} number={mineInfomation.value} x={mineInfomation.X} y={mineInfomation.Y}/>);
            }
        }
    }
    

    const MakingMine = () => {

        const CheckMine = (x : number, y : number) => {
            const infomation = mineInfomationGroup.filter(obj => (Math.abs(obj.X - x) === 0 || Math.abs(obj.X - x) === 1) && (Math.abs(obj.Y - y) === 1 || Math.abs(obj.Y - y) === 0) && !obj.isMine);
            const length = infomation.length;
            for( let i = 0; i < length; i++ ){
                infomation[i].value++;
            }
        }

        let createMine = 0;
        while(true){
            const x = Math.floor(Math.random() * maxColumn);
            const y = Math.floor(Math.random() * maxRow);

            const infomation = mineInfomationGroup.find(obj => obj.X === x && obj.Y === y && !obj.isMine);
            if(infomation){
                infomation.isMine = true;

                CheckMine(infomation.X,infomation.Y);

                createMine++;
            }


            if( createMine === requestMine ) break;
        }

        while(true){
            const infomation = mineInfomationGroup.filter(obj => obj.value === 0 && !obj.isMine);
            const length = infomation.length;

            if( length === 0 ){
                break;
            };

            const targetIndex = Math.floor(Math.random() * length);
            const target = infomation[targetIndex];
            target.isMine = true;
            CheckMine(target.X,target.Y);
        }

    }
    MakingMine();


    MakingColumn(); 
    return componentArray;
}


export default CreateMine;