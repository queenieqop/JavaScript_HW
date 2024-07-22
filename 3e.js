function print(year,month){
    if(fn(year)==false){
        day(month);
        console.log(day(month));
    }else if(fn(year)==true){
        dayday(month);
        console.log(dayday(month));
    }else
        return false;      
}

print(2024,2);



function fn(x){
    if(x%4==0 && x%100!=0){
        return true;
    }else if(x%400==0){
        return true;
    }else
    return false;
}
// console.log(fn(2024))


function day(y){
    if (y == 1 || y == 3 || y == 5 || y == 7 || y == 8 || y == 10 || y == 12){
        return 31;
    }else if (y==4 || y==6 || y==9 || y==11){
        return 30;
    }else if(y==2){
        return 28;
    }else
        return false
}
// console.log(day(2))


function dayday(y){
    if (y == 1 || y == 3 || y == 5 || y == 7 || y == 8 || y == 10 || y == 12){
        return 31;
    }else if (y==4 || y==6 || y==9 || y==11){
        return 30;
    }else if(y==2){
        return 29;
    }else
        return false
}
// console.log(dayday(2))



