let text = "Hello World"

let textArray = text.split(" ")
console.log(textArray[textArray.length - 1].length)


let moon = " fly me to the moon "
let moonArray = moon.trim().split(" ")
console.log(moonArray[moonArray.length - 1].length)


//=========================Anagram Assignment==================================
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))

function isAnagram(actualText, expectedText) {

    let actual = actualText.toLowerCase().split('').sort()
    let expect = expectedText.toLowerCase().split('').sort()

    for (let i = 0; i <= actual.length - 1; i++) {
        if (actual[i] != expect[i]) {
            console.log("Not an Anagram")
            return false
        } else {
            console.log("Given Words are Anagram")
            return true
        }
    }

}



