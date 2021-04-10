const getNames = (name: string) => {
  return (age: number) => {
    return `name is ${name}, and age is ${age}`;
  }
}

const resp = getName('Jack')(22);

console.log(res);

const fetchApis = () => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 > 5) {
        resolve(5);
      } else {
        reject(-1)
      }
    }, 100);
  })
}


fetchApis().then(console.log).catch(console.log).finally(() => {
  console.log('Promise finally');
})
