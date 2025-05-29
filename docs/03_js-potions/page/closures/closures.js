function outerFn(){
     var a =1;
     var b = 2;
     return function() {
        return a + b;
     }
}

console.log("Basic Closure : ", outerFn()())

for(var i=0;i< 2;i++){
    console.log("inside loop", i,outerFn()());
}

function returnsParam(n){
    
    return function() {
       return n;
    }
}

for(var i=0;i< 2;i++){
    console.log("inside loop, returns param", i,returnsParam(i)());
}

for(var i=0;i< 2;i++){
    setTimeout(function(){
    console.log("inside loop, returns param, call inside setTimeout", i,returnsParam(i)());
})
}

for(let i=0;i< 2;i++){
    setTimeout(function(){
    console.log("using let inside loop, returns param, call inside setTimeout", i,returnsParam(i)());
})
}






function addNum1(){
    var a = 10;
    var b =15;
    function sum() {
        return a+b;
    }
    return sum;
}



var  x1 = addNum1();
console.log(x1())


function addNum(){
    var a = 10;
    var b =15;
    return sum;
}

function sum() {
    return a+b;
}


var  x = addNum();
console.log(x())