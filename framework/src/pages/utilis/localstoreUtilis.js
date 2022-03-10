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

export { loadLocalStore, setLocalStore }