let arr = [123, 'asd', true, [111, 222], 99.99, -77, false, 'super string', 987789, null];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

author1 = {
    name: 'J. K. Rowling',
    age: 57
}
author2 = {
    name: 'Arthur Conan Doyle',
    age: 153
}
author3 = {
    name: 'War and Peace',
    age: 184
}

let arrauthors = [author1, author2, author3];

let book1 = {
    title: 'Harry Potter',
    pagecount: 356,
    genre: 'fantasy',
    authors: arrauthors
}
let book2 = {
    title: 'Sherlock Holmes',
    pagecount: 278,
    genre: 'detective fiction',
    authors: arrauthors
}
let book3 = {
    title: 'War and Peace',
    pagecount: 1476,
    genre: 'historical fiction',
    authors: arrauthors
}



let user1 = {
    name: 'John',
    username: 'johny15',
    password: 'john123'
}
let user2 = {
    name: 'Brad',
    username: 'br-red',
    password: 'bred1789'
}
let user3 = {
    name: 'Victor',
    username: 'vitok',
    password: 'prostopass'
}
let user4 = {
    name: 'Tom',
    username: 'tomatotom',
    password: 'superpas'
}
let user5 = {
    name: 'Mike',
    username: 'kasanova',
    password: 'drowssap'
}
let users = [user1, user2, user3, user4, user5]
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password)


let x = -3;
if (x !== 0) console.log('Вірно');
else console.log('Не вірно');


let time = prompt('Input time');

if (time>0 && time<15)
    console.log('First');
else if (time>=15 && time<30)
    console.log('Second');
else if (time>=30 && time<45)
    console.log('Third');
else if (time>45 && time<60)
    console.log('Forth');
else
    console.log('Wrong time');


let day = prompt('Input day');

if (day>=1 && day < 11)
    console.log('First');
else if (day>=11 && day < 21)
    console.log('Second');
else if (day>=21 && day <= 31)
    console.log('Third');
else
    console.log('Wrong day');

let x1 = 30;
let x2 = 30;

if (x1 === x2)
    console.log('Рівні');
else if (x1 > x2)
    console.log(x1);
else
    console.log(x2);

let y = 0;
    y = y || 'default';
console.log(y);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[1].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[2].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[3].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[4].monthDuration > 5)
    console.log('Супер');
if (coursesAndDurationArray[5].monthDuration > 5)
    console.log('Супер');
