let ar1 = [1, 2, 3, 4, 5]
let ar2 = [1, 2, 9, 4, 5]

function intersection(arr1, arr2) {
    let output = []
    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr2.length - 1; j++) {
            if (arr1[i] == arr2[j]) {
                output.push(arr1[i])
            }

        }
    }
    console.log(output)
}

intersection(ar1, ar2)


