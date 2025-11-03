'use strict';

const tree = document.querySelector('#users');
const li = tree.querySelectorAll('li');
const data = [];

Array.from(li).forEach((item) => {
  const ageConvert = Number(item.dataset.age) ? Number(item.dataset.age) : null;

  if (item.dataset.role === 'student') {
    data.push({
      name: item.textContent,
      age: ageConvert,
    });
  }
});

const dataCopy = [...data].sort((a, b) => {
  const aVal = a.age;
  const bVal = b.age;

  if (aVal === null && bVal === null) {
    return 0;
  }

  if (aVal === null) {
    return 1;
  }

  if (bVal === null) {
    return -1;
  }

  return aVal - bVal;
});

console.log(dataCopy[0]);
