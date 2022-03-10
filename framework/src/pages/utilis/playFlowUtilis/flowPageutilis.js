import { loadLocalStore, setLocalStore } from './localstoreUtilis'
import { v4 as uuidv4 } from 'uuid';

function initElements() {
    const ele = [
        { id: uuidv4(), data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
        { id: uuidv4(), data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
        { id: uuidv4(), data: { label: '@@comp/counter' }, position: { x: 150, y: 150 } },
        { id: uuidv4(), data: { label: '@@comp/counter' }, position: { x: 200, y: 200 } },
        { id: uuidv4(), data: { label: '@@comp/timer' }, position: { x: 300, y: 300 } },
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