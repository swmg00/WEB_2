//1. get 메서드
let title = document.getElementById('title');
console.log(title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트:', items[0]);
console.log('벤치프레스:', items[1]);
console.log('데드리프트:', items[2]);

let liList = document.getElementsByTagName('li');
console.log(liList);

//2. HTML 요소 쿼리
let h2 = document.querySelector('#title');
console.log('h2: ', h2);

let item = document.querySelector('.item');
console.log('query item: ', item);

let itemAll = document.querySelectorAll('.item');
console.log('itemAll: ', itemAll);
console.log('itemAll: ', itemAll[0]);
console.log('itemAll: ', itemAll[1]);
