
function gradeCalculation(Score) {
    let studentScore = Score
    switch (true) {
        case studentScore >= 70:
            console.log(`Student Score is ${studentScore} and the Grade is A`)
            break;
        case studentScore >= 50 && studentScore < 70:
            console.log(`Student Score is ${studentScore} and the Grade is B`)
            break;
        case studentScore >= 35 && studentScore < 50:
            console.log(`Student Score is ${studentScore} and the Grade is C`)
            break;
        default:
            console.log(`Student Score is ${studentScore} and the Grade is D`)
    }


}

gradeCalculation(78)
gradeCalculation(58)
gradeCalculation(38)
gradeCalculation(18)