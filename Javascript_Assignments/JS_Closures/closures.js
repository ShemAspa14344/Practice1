function counter(){
    var count = 1;
    
    function add(count){
        count += 1;
        return count;
    }
    
    return `The original count ${count}, new count ${add(count)}`;
}

console.log(counter())