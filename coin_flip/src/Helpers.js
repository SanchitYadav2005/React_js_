function choice(arr){
    let randInex = Math.floor(Math.random() * arr.length);
    return arr[randInex];
}

export {choice}