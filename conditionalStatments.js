
function launchBrowser(browserName) {
    if (browserName == "Chrome") {
        console.log(`Browser Launched is ${browserName}`)
    } else if (browserName == "Edge") {
        console.log(`Browser Launched is ${browserName}`)
    } else
        console.log(`Browser Launched is ${browserName}`)
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log(`Running Test Type is ${testType}`)
            break;
        case "sanity":
            console.log(`Running Test Type is ${testType}`)
            break;
        case "regression":
            console.log(`Running Test Type is ${testType}`)
            break;
        default:
            console.log(`Running Test Type is smoke`)
    }

}

launchBrowser("Edge")
runTests("regression")