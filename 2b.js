let sec = 93784%60;
// console.log(sec);
let min = (parseInt(93784/60))%60;
// console.log(min);
let hour = (parseInt(93784/60/60))%24;
// console.log(hour);
let day = parseInt(93784/60/60/24);
// console.log(day);

console.log(`"93784秒=${day}天${hour}小時${min}分鐘${sec}秒"`);
