function outerFn(){
     var a =1;
     var b = 2;
     return function() {
        return a + b;
     }
}

console.log("Basic Closure : ", outerFn()())