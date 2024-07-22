const mySkills = 
['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];

let str = mySkills.join();
console.log(str);
let arr = str.split("");
console.log(arr);

let letterCount = {};

arr.forEach(letter => {
    if (/[a-z]/.test(letter)) {
        if (letterCount[letter]) {
            letterCount[letter]++;
        } else {
            letterCount[letter] = 1;
        }
    }
});


for (let letter in letterCount) {
    console.log(`${letter}: ${letterCount[letter]}`);
}