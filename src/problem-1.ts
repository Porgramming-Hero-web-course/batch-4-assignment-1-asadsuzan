/* 
Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
 Sample Input:
sumArray([1, 2, 3, 4, 5]);

 Sample Output:
15;
*/

function sumArray(numbs: Array<number>): number {
    return numbs.reduce((acc: number, curr: number): number => acc += curr, 0)
}
console.log(sumArray([1, 2]))