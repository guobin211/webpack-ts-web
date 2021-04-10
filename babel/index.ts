const getName = (name: string) => {
  return (age: number) => {
    return `name is ${name}, and age is ${age}`;
  }
}

const res = getName('Jack')(22);

console.log(res);

const fetchApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 > 5) {
        resolve(5);
      } else {
        reject(-1)
      }
    }, 100);
  })
}


fetchApi().then(console.log).catch(console.log).finally(() => {
  console.log('Promise finally');
})
