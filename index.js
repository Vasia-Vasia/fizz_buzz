const fizzBuzz = (begin, end) => {
    let i = begin;
  
    while (i <= end) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
      i = i + 1;
    }
  };
  
  export default fizzBuzz;

  // Проверка
  
  const begin = 11;
  const end = 20;
  
  fizzBuzz(begin, end);
  