
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rect_area(a, b) {
    return a*b;
}
console.log(rect_area(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle_area(r) {
    const pi = 3.14
    return pi*r*r;
}
console.log(circle_area(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cyl_area(h, r) {
    const pi = 3.14
    return 2*h*pi*r+2*pi*r*r;
}
console.log(cyl_area(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
function logarr(arr) {
    for(const cur of arr)
    console.log(cur);
}
logarr([1,2,3,4,5,'a','ry','tyu']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text_parag(text) {
    document.write(`<p>${text}</p>`);
}
text_parag('lorem ipsum');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function text_li(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}
text_li('lorem ipsum');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function text_li_num(text, num) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
text_li_num('lorem ', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function li_with_dif_texts(arr) {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
li_with_dif_texts([123,'sfds3', '1256', true, -972, 'mnogobukav']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arr_of_obj (arr){
    for (const arrElement of arr) {
        document.write(`<div>id: ${arrElement.id} - name: ${arrElement.name} - age: ${arrElement.age}</div>`);
    }
}
arr_of_obj([{id:1, name:'Vasya', age: 31},{id:2, name:'Max', age: 32},{id:3, name:'Victor', age: 33},{id:4, name:'Grisha', age: 34}]);

// - створити функцію яка повертає найменьше число з масиву
function find_min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
         if (arr[i] < min) {
             min = arr[i];
         }
    }
    return min;
}
console.log(find_min([234,235,23,11,45643,4,234]));


// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log(sum([14,26,55,100]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    return arr;
}
console.log(swap([123,456,56,23,'asd','qwe',true], 1, 6));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangerate;
    for (const currencyValue of currencyValues) {
        if (exchangeCurrency === currencyValue.currency){
            exchangerate = currencyValue.value;
        }
    }
    if (exchangerate) return sumUAH/exchangerate;
    else return 'Input correct data';
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')); // => 250