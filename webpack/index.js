"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

const getNames = name => {
  return age => {
    return "name is ".concat(name, ", and age is ").concat(age);
  };
};

const resp = getName('Jack')(22);
console.log(res);

const fetchApis = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 > 5) {
        resolve(5);
      } else {
        reject(-1);
      }
    }, 100);
  });
};

fetchApis().then(console.log).catch(console.log).finally(() => {
  console.log('Promise finally');
});