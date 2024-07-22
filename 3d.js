function fn(i){
    if(i<=1)
        return false;

    for(j=2; j<i; j++){
        if(i%j==0){
            return false;
            }
        }
        return true;
    }

function sum(n){
    let sum = 0;
    for(i=2; i<=n; i++){
        if (fn(i)==true){
            sum+=i;
        }
    }
    return sum;
}
console.log(sum(n))
