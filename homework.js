// -------------------------- Home work 3 --------------------------
// -------------------------- Bondar Dmitry --------------------------

// -------------------------- Циклы. Задачи.------------------------

// 1.На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while. 


let str = 'i am in the easycode';
    str = str.split(' ');
    i = 0;
    newStr = '';



while (i <= str.length - 1) {
    index = str[i];
    newStr += ' ' + index[0].toUpperCase() + index.slice(1);
    i++;
}

console.log(newStr);


// 2. 

let str1 = 'tseb eht ma i';
let i = str1.length - 1;
let newStr1 = '';

while (i >= 0) {
    newStr1 += str1[i];
    i--;
    
}

console.log(newStr1);


// 3. 

let a = 10;

for (let i = a; i > 1;) {
    a *= --i;
     
}

console.log(a);


// 4. 

let myStr = 'JavaScript is a pretty good language';
    myNewStr = '';

for (let i = 0, max = myStr.length; i < max; i++) {
    if (myStr[i] === ' ') {
        myNewStr += myStr[i + 1].toUpperCase();
        i++;        
        continue;
    }
    myNewStr += myStr[i];    
}

console.log(myNewStr);



// 5. 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 

for (let x of arr) {
    if (x % 2 != 0) {
        console.log(x);
    }
}


// 6. 

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let entry in list) {
    if (typeof list[entry] === 'string') {
        list[entry] = list[entry].toUpperCase();
    }
}

console.log(list);