let arr=[];
for(i=9; i>=2; i--){
    let innerarr=[];
    for(j=2; j<=i; j++){
        innerarr.push(i*j);
    }
    arr.push(innerarr);
}
console.log(arr);