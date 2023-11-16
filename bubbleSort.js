const array = [7, 9, 8, 5, 7, 4, 1, 6, 5, 7, 9, 9, 10, 10];

function bubbleSort(array, reverse) {
    const sorted = array;
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let j = 0; j <= sorted.length - 1; j++) {
            const operation = reverse
                ? sorted[j] < sorted[j + 1]
                : sorted[j] > sorted[j + 1];
            if (operation) {
                isSorted = false;
                const aux = sorted[j + 1];
                sorted[j + 1] = sorted[j];
                sorted[j] = aux;
            }
        }
    }

    return sorted;
}

const response = bubbleSort(array);

console.log(response);
