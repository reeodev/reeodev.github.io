import { loadLocalStore, setLocalStore } from './localstoreUtilis'
import { v4 as uuidv4 } from 'uuid';

function initElements() {
    const ele = [
        { id: uuidv4(), data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
        { id: uuidv4(), data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
    ];

    const res = loadLocalStore("flowArr");

    if(res){
        return res
    }
    else{
        setLocalStore("flowArr", ele);
        return ele
    }
}


export { initElements }