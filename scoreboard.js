let count = 0;
let awayCount = 0;
let score = document.getElementById("scoreBoard")
let awayScore = document.getElementById("awayScore")
let saved = document.getElementById("savedScore")

function onePoint(){
    count = count + 1
    score.textContent = count
}

function twoPoint(){
    count = count + 2
    score.textContent = count
}

function threePoint(){
    count = count + 3
    score.textContent = count
}

function reset(){
    score.textContent = 0
    awayScore.textContent = 0
    count = 0
    awayCount = 0
    saved.textContent = ""
}

function onePoint2(){
    awayCount  = awayCount + 1
    awayScore.textContent = awayCount 

}

function twoPoint2(){
    awayCount = awayCount + 2
    awayScore.textContent = awayCount
}

function threePoint3(){
    awayCount = awayCount + 3
    awayScore.textContent = awayCount
}

function save(){
    let gameScore = score.textContent
    let awayTeamScore = awayScore.textContent
    saved.textContent += "Final: " + gameScore + " - " + awayTeamScore
}