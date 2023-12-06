
function fibonacci(target) {
    if (target <= 0) {
        return 0;
    }

    const sum = [0, 1];
    for (let i = 1; i <= target; i++) {
        sum.push(sum[i - 1] + sum[sum.length - 1]);
    }

    console.log(sum);

    return sum[target];
}

const response = fibonacci(8);

console.log(response);
