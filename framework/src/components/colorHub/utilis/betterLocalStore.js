function getStoreObject(key){

    if(!key || typeof key !== "string"){
        throw new Error("BetterLocalStore: Key does not exist.");
    }

    const obj = localStorage.getItem(key);
    return !obj ? null : JSON.parse(obj);
}

function checkObjectEmpty(object) {

    // if a key is exist in object means if have content, then return false in first loop
    for (let keys in object) {
       return false
    }

    return true;
}

function pushObject(key, value, createIfNull = true){

    if(!key || typeof key !== "string"){
        throw new Error("BetterLocalStore: Key does not exist.");
    }

    if(!value){
        throw new Error("BetterLocalStore: Invalid value");
    }

    if(typeof value === "object" && checkObjectEmpty(value)){
        throw new Error("BetterLocalStore: Invalid object.");
    }

    let storeItem = getStoreObject(key);

    if(storeItem === null){
        if(createIfNull){
            createObject(key, value);
            return true;
        }
        else{
            throw new Error("BetterLocalStore: Key does not exist in localStore.");
        }
    }
    else{
        storeItem.push(value);
        const str = JSON.stringify(storeItem);
        localStorage.setItem(key,str);
        return true;
    }

}

function setObject(key, value, createIfNull = true, allowEmptyObject = true){

    if(!key || typeof key !== "string"){
        throw new Error("BetterLocalStore: Key does not exist.");
    }

    if(!value){
        throw new Error("BetterLocalStore: Invalid value");
    }

    if( !allowEmptyObject && (typeof value === "object" && checkObjectEmpty(value)) ){
        throw new Error("BetterLocalStore: Invalid object.");
    }

    let storeItem = getStoreObject(key);

    if(storeItem === null){
        if(createIfNull){
            createObject(key, value);
            return true;
        }
        else{
            throw new Error("BetterLocalStore: Key does not exist in localStore.");
        }
    }
    else{
        const str = JSON.stringify(value);
        localStorage.setItem(key,str);
        return true;
    }

}

function createObject(key, value){

    if(!key || typeof key !== "string"){
        throw new Error("BetterLocalStore: Key does not exist.");
    }

    if(!value){
        throw new Error("BetterLocalStore: Invalid value");
    }

    const obj = localStorage.getItem(key);

    if(obj){
        throw new Error("BetterLocalStore: Key already existed.");
    }
    else{
        const str = Array.isArray(value) ? JSON.stringify([...value]) : JSON.stringify([value]);
        localStorage.setItem(key,str);
        return true;
    }
}

function removeKey(key){

    if(!key || typeof key !== "string"){
        throw new Error("BetterLocalStore: Key does not exist.");
    }

    localStorage.removeItem(key);
    return true;

}

export { getStoreObject, pushObject, setObject, createObject, removeKey }