
import Mine from "../../Content/Mine";
import { MineInfomation } from "../../types";

const CreateMine = (maxColumn : number,maxRow : number,requestMine : number) : MineInfomation[] => {

    const mineInfomationGroup : MineInfomation[] = [];

    const MakingInfomation = () => {
        for(let i = 0; i < maxColumn; i++){
            let x : number = i + 1;

            for(let j = 0; j < maxRow; j++){
                let y : number = j + 1;

                mineInfomationGroup[(i * maxColumn) + j] = {x : x, y : y, value : 0,isMine : false};

            }
        }
    }
    MakingInfomation();



    const MakingMine = () => {

        const CheckMine = (x : number, y : number) => {
            const infomation = mineInfomationGroup.filter(obj => (Math.abs(obj.x - x) === 0 || Math.abs(obj.x - x) === 1) && (Math.abs(obj.y - y) === 1 || Math.abs(obj.y - y) === 0) && !obj.isMine);
            const length = infomation.length;
            for( let i = 0; i < length; i++ ){
                infomation[i].value++;
            }
        }

        let createMine = 0;
        while(true){
            const x = Math.floor(Math.random() * maxColumn);
            const y = Math.floor(Math.random() * maxRow);

            const infomation = mineInfomationGroup.find(obj => obj.x === x && obj.y === y && !obj.isMine);
            if(infomation){
                infomation.isMine = true;

                CheckMine(infomation.x,infomation.y);

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
            CheckMine(target.x,target.y);
        }

    }
    MakingMine();


   // MakingColumn(); 
    return mineInfomationGroup;
}


export default CreateMine;