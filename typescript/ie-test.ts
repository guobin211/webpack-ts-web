export function ieTest(params: string) {
  console.log(params);
  return (other: string) => {
    return `${params} and ${other}`;
  };
}
