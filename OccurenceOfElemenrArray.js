const nums = [2, 4, 5, 2, 1, 2, 3, 4, 4, 4]
const elementToCount = 4

OccurenceOfElement(nums, elementToCount)


function OccurenceOfElement(nums, elementsToCount) {
    var count = 0
    for (const element of nums) {
        if (element === elementsToCount) {
            count = count + 1
        }
    }
    console.log(count)
}

