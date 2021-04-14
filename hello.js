// # Inputs and Outputs

// Write down pseudo-code on pen and paper for the following patterns:

// 1.
// Input   =>	Output
// 2, 5	  =>  5
// 0, 100	=>  100
// 52, 35	=>  52 -->

//Algorithm

const myNumbers1 = [2, 5];
myNumbers1.shift();
console.log(myNumbers1);

const zeroToHundred = [0, 100];
zeroToHundred.shift();
console.log(zeroToHundred);

const gettingOlder = [52, 35];
gettingOlder.pop();
console.log(gettingOlder);

// 2.
// Input	   =>   Output
// 5, 5     =>   true
// 40, 40   =>   true
// 50, 51   =>   false

//Algorithm

const twoFives = [5, 5];
console.log(Boolean(twoFives));

const fortyTwoTimes = [40, 40];
console.log(Boolean(fortyTwoTimes));

const fiftyAndFiftyOne = [50, 51];
console.log(fiftyAndFiftyOne === "hello");


// 3.
// Input	     =>   Output
// 110, 100	 =>   true
// 150, 100	 =>   true
// 50, 100	   =>   false

const overOneHundredFirst = [110, 100];
console.log(Boolean(overOneHundredFirst));

const overOneHundredSecond =  [150, 100];
console.log(Boolean(overOneHundredSecond));

const fiftyAndOneHundred = [50, 100];
console.log(fiftyAndOneHundred === "fish");


