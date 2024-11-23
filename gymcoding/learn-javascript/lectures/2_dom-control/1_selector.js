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

// h2.textContent = '운동!!!';

// //h2.innerHTML = '<span>운동@@@</span>';
// document.querySelector('body').innerHTML = '<strong>운동</strong>';

let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요!');
input.setAttribute('required', '');
input.removeAttribute('placeholder');
input.removeAttribute('required');

let helloItem = document.querySelector('.hello');
console.log(helloItem);
// helloItem.style.color = 'blue';
// helloItem.style.backgroundcolor = 'black';

helloItem.classList.add('dark', 'one');
helloItem.classList.remove('one');
