// Функции

// Задание 1

// function func() {
// 	alert('Радомир');
// }

// func()

// Задание 2

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   alert( sumTo(100) );

// OR

//   function sumTo(n) {
//     if (n === 1) return 1;
//     return n + sumTo(n - 1);
//   }
  
//   alert( sumTo(100) );

// Задание 3

// function scuare(num) {
//     alert(num ** 3)
// }

// scuare(2);

// Задание 4

// function scuare(num) {
//     if (num >= 0) {
//         alert('+++')
//     } else (alert('---'))
// }

// scuare(-1);

// Задание 5 

// function sum(num1, num2, num3) {
//     alert(num1 + num2 + num3)
// }

// sum(1,-2,3);
 
// Задание 6 

// function sum(param1, param2, param3) {
//     alert(param1 + param2 + param3)
// }

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// sum(param1, param2, param3);

// Задание 7

// function func(num1 = 0, num2 = 0) {
// 	alert(num1 + num2);
// }
// func()
 
// Задание 8

// function func(num) {
//     return num ** 3
// }

// let result = func(4)
// alert(result)

// Задание 8 

// function func(num) {
// 	return  Math.sqrt(num);
// }

// let result = func(3) + func(4);
// alert(result); 

// Задание 8 

// function sqrt(num) {
// 	return Math.sqrt(num);	
// }

// function round(num) {
// 	return num.toFixed(3);
// }

// let result = round(sqrt(2));
// alert(result);

// Задание 8 

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }

// function round(num) {
// 	return num.toFixed(1);
// }

// let result = round(sum(sqrt(2),sqrt(3),sqrt(4)));
// alert(result);

// Задание 9 

// function func() {
// 	let sum = 0;
// 	let i = 1;
	
// 	while (true) { // бесконечный цикл
// 		sum += i;
		
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
		
// 		i++;
// 	}
// }

// alert( func() );

// Задание 10

// function func(num1, num2) {
	
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
// }

// alert(func(3, 4));

// Задание 11

// function getSumScuare(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum = sum + elem ** 2;
// 	}
	
// 	return sum;
// }

// let arr = [1, 2, 3, 4];

// alert(getSumScuare(arr));

// Задание 11

// let digit = 123

// function getDigitsSum(digit) {
// 	let strDigit = String(digit)
// let sum = 0

// for (let i = 0; i < strDigit.length; i++) {
// 	sum += +strDigit[i];	
// }
//  return sum;}

//  alert(getDigitsSum(digit));


// Задание 85.3 Not Yet

// let digits = 10

// function  getDivisors(digits) {}

// Задание Задача 85.4

// function reverseStr(str) {
// 		return str.split("").reverse().join("");
// }
// 	alert(reverseStr("Привет мир!"));

//Задача 85.5  Удаление элемента со знач value

// let value = 3
// let digits = [1,3,5,3]

// function delElem(value, digits) {
// 	digits.forEach((item, index) => {
// 		if(item === value) {
// 			digits.splice(index, 1)
// 		}		
// 	})
// }

// delElem(value, digits)
// console.log(digits)


// let value = 3

// let arr = [1, 2, 3, 4, 5, 3]

// arr = arr.filter(item => item !== value)

// console.log(arr)

// Задание 14

// let digits = []	
// function fillDigits(digits, value) {
	
// }

// Задание 14

let num = 31;

let flag = true;
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false;
		break;
	}
}

console.log(flag);

// Задание 14



// Задание 14



// Задание 14