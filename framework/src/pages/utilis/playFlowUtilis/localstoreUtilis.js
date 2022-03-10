function loadLocalStore(key){
    let result = localStorage.getItem(key);
    
    if(!result){
        return null
    }
    else{ 
        return JSON.parse(result)
    }
}

function setLocalStore(key, object){
    let str = JSON.stringify(object);
    localStorage.setItem(key, str);
}

function putDataStore(uid, value){
    let result = localStorage.getItem("flowArrPresistData");
    
    if(!result){
        result = [{id:uid, value: value}]
        setLocalStore("flowArrPresistData", result);
        return;
    }

    let obj = JSON.parse(result);
    let found = (obj.filter( v => v.id === uid)).length === 1;

    if(!found){
        obj.push({id:uid, value: value});
        setLocalStore("flowArrPresistData", obj);
        return;
    }

    for(let i = 0; i < obj.length; i++){
        if(obj[i].id === uid){
            obj[i].value = value;
            break
        }
    }

    setLocalStore("flowArrPresistData", obj);
    return;

}

function getDataStore(uid){
    let result = loadLocalStore("flowArrPresistData");

    if(!result){
        return []
    }
    else{ 
        return result.filter( v => v.id === uid )
    }
}

export { loadLocalStore, setLocalStore, putDataStore, getDataStore }