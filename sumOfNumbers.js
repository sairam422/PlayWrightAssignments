function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i
        console.log(`sum of ${i} value(s) is ${sum}`)
    }
    return sum
}

console.log(sumOfNumbers(100))