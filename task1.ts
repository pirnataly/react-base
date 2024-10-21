type Arguments = {
  firstArg: string;
  secondArg: string;
  base: number;
}

declare interface Math {
  trunc(x: number): number;
}

type ThreeParamFunc = (a: string, b: string, c: number) => string;
type Calculator = { sum: ThreeParamFunc, subtract: ThreeParamFunc, multiply: ThreeParamFunc, divide: ThreeParamFunc };

const calculator: Calculator = {
  sum(a, b, radix) {
    return (parseInt(a, radix) + parseInt(b, radix)).toString(radix);
  },
  subtract(a, b, radix): string {
    return (parseInt(a, radix) - parseInt(b, radix)).toString(radix);
  },
  multiply(a, b, radix): string {
    return (parseInt(a, radix) * parseInt(b, radix)).toString(radix);
  },
  divide(a, b, radix): string {
    return (Math.trunc(parseInt(a, radix) / parseInt(b, radix))).toString(radix);
  }
}

const args: Arguments[] = [
  {
    firstArg: '45',
    secondArg: '25',
    base: 10,
  }, {
    firstArg: '1001',
    secondArg: '0001',
    base: 2,
  },
  {
    firstArg: '14C',
    secondArg: '2D',
    base: 16,
  }
];

for (let key in calculator) {
  console.log(key);
      args.forEach((item) => {
      console.log(`This function ${key}s ${item.firstArg} and ${item.secondArg} in ${item.base} notation`);
      const result = calculator[key](item.firstArg, item.secondArg, item.base);
      console.log('The answer is:', result, '\n');
    })

}




