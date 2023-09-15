// const axios = require("axios/dist/node/axios.cjs");

import { ACCESSOR_TYPES } from "@babel/types";
import { callbackify } from "util";

function array() {
  setTimeout(() => {
    console.log([1, 2, 3, 4, 5]);
  }, 1000);
}

array();
console.log(2);

const ORDER_TYPES = {
  PIZZA: 0,
  WINGS: 5,
  SANDWICH: 6,
};

const orders = [
  { pizzas: 3, type: ORDER_TYPES.PIZZA },
  { wings: 2, type: ORDER_TYPES.WINGS },
  { pizzas: 8, type: ORDER_TYPES.PIZZA },
];

function numberOfPizzas(orders): number {
  return orders.reduce((acc, element) => {
    if (element.type === ORDER_TYPES.PIZZA) {
      acc += element.pizzas;
    }
    return acc;
  }, 0);
}

console.log(numberOfPizzas(orders));

function halfValue(numbers) {
  return numbers.map((element) => {
    if ((element / 2) % 0) {
      return element / 2;
    }
    return Math.ceil(element / 2);
  });
}

console.log(halfValue([1, 2, 3, 4, 5, 6]));

function countC(str) {
  const strUpp = str.toUpperCase();
  const strArr = strUpp.split("");
  console.log(strArr);
  const red = strArr.reduce((acc, element) => {
    if (
      element === "A" ||
      element === "O" ||
      element === "E" ||
      element === "I" ||
      element === "U"
    ) {
      acc += 1;
    }
    return acc;
  }, 0);
  return red;
}

console.log(countC("Copacabana"));

function reverse(string) {
  const arr = string.split("");
  const reverseArr = arr.reverse();
  return reverseArr.reduce((acc, element) => acc + element, "");
}

console.log(reverse("konik"));

setTimeout(() => {
  console.log(reverse("konik"));
}, 3000);

const promise = new Promise((resolve, reject) => {
  if (2 > 1) {
    resolve("It's good");
  }
  reject("It's bad");
});

promise.then((result) => console.log(result));

function makeATea(teaName: string, callback: Function) {
  console.log(`teaName : ${teaName}`);
  setTimeout(callback, 900);
}

function tasteATea() {
  setTimeout(() => console.log("Tea is ok"), 94);
}

makeATea("Earl Grey", tasteATea);

function makeATeaPromise(teaName: string, callback: Function) {
  console.log(`teaName : ${teaName}`);
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 900);
  });
}

function tasteATeaPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => console.log("Tea is ok"), 94);
  });
}

makeATeaPromise("Earl Grey", tasteATeaPromise);
