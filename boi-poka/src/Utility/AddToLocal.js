const getToLocalStore = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList = id => {
    const storedList = getToLocalStore();
    if(storedList.includes(id)){
        console.log(id, "this item is already in a list")
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

export {getToLocalStore, addToStoredReadList}