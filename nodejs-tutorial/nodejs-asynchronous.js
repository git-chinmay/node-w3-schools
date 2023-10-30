// Synchronous Programming
function doSomethingSynch(){
    // Do something
}

doSomethingSynch()

// Asynchronous Programming
function doSomethingASynch(callback){
    setTimeout(callback, 1000);
}

doSomethingASynch(function(){
    // Code here will be executed after 1000ms
})