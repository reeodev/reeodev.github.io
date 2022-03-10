import React from 'react';

import Counter from '../../components/toolsBoxComp/Counter';
import Timer from '../../components/toolsBoxComp/Timer';
import { getDataStore } from './localstoreUtilis';
// import ThreeCal from './ThreeCal';
// import ThreeCalBin from './ThreeCalBin';
// import ThreeCalHex from './ThreeCalHex';

// const convertObject = {
//     "@@comp/counter" : <Counter/>,
//     "@@comp/timer" : <Timer/>,
//     "@@comp/ThreeCal" : <ThreeCal/>, //Dec to Bin/Hex Cal
//     "@@comp/ThreeCalBin" : <ThreeCalBin/>,
//     "@@comp/ThreeCalHex" : <ThreeCalHex/>,
// }

function finParamewithComp(compName, id){

    let getLocalStoreVal = getDataStore(id)
    let finalVal = getLocalStoreVal.length === 0 ? 0 : getLocalStoreVal[0].value;


    if(compName === "@@comp/counter"){
        return <Counter id={id} value={finalVal} />
    }
    else if(compName === "@@comp/timer"){
        return <Timer id={id} value={finalVal} />
    }

}

export { finParamewithComp }