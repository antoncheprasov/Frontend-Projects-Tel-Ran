// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function minValue (a, b) {
    if (a < b) {
      return a
  } else {
      return b
  } 
}
console.log(minValue(11, 8));

//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function evenNumbers(a, b) {
    let first = a > b ? a : b;
    let last = a > b ? b : a;
for (let i = first; i >= last; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
console.log(evenNumbers(11, 21));

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(numFirst, numSecond = 2) {
    return numFirst**numSecond;
}
console.log(power(11, 2));

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function counter(n) {
    let sum = 0 
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
      }
      return sum;
    }
console.log(counter(10));

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function twoValues(n, m) {
    let evenNumSum = 0;
    let oddNumSum = 0;

    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            evenNumSum = evenNumSum + i
        } else {
            oddNumSum = oddNumSum + i
        }
    }
console.log("Even numbers summary: " + evenNumSum)
console.log("Odd Numbers Summary: " + oddNumSum);
}
twoValues(1, 10);

//Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
function long(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
  
    return longest;
  }
  
  