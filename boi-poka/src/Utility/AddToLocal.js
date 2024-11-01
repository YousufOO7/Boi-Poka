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


const getToWishStoredLocal = () => {
    const storedList = localStorage.getItem('wish-list');
    if(storedList){
        const storedListStr = JSON.parse(storedList)
        return storedListStr;
    }
    else{
        return [];
    }
}


const addToWishListLocal = id => {
    const storedList = getToWishStoredLocal();
    if(storedList.includes(id)){
        console.log(id, "this book is already in the list");
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}


export { addToStoredReadList, addToWishListLocal, getToLocalStore, getToWishStoredLocal}