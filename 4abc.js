//4a. 隨機不可重複陣列

let arr = [];

for(i=0; i<5; i++){
    arr[i] = Math.floor(Math.random()*10);

    for(j=0; j<i; j++){
        while(arr[j] == arr[i]){
            arr[i] = Math.floor(Math.random()*10);
        }
    }
}
console.log(arr);


//4b. 總和

let sum = 0;
for(i=0; i<5; i++){
    sum += arr[i];
}
console.log(sum);


//4b. 平均值

let avg = 0;
avg = sum/arr.length;
console.log(avg);


//4c. 平均值介於哪個元素

arr.sort();
console.log(arr.sort());

for(i=0;i<5;i++){
    if(arr[i]==avg){
        console.log("平均值在索引值"+i);
    }else if(arr[i] < avg && avg < arr[i + 1]){
        console.log("平均值在索引值"+i+"和"+(i+1));
    }
}