const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const you = document.getElementById("you")
const comp = document.getElementById("comp")
const currentRound = document.getElementById("current-round")
const setRound = document.getElementById("set-round")
const selection = document.querySelectorAll(".selection")
const item = document.querySelectorAll(".item")
const resultScoreYou = document.getElementById("result-scoreYou")
const resultScoreComp = document.getElementById("result-scoreComp")

setRound.innerHTML = item[0].value
for (let i = 0; i < item.length; i++) {
    item[i].onclick = function(){
        setRound.innerHTML = item[i].value;
    }
}

const SELECT = [
    {
        name: "rock",
        emoji: "👊",
        beats: "scissors"
    },
    {
        name: "paper",
        emoji: "✋",
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: "✌️",
        beats: "paper"
    }
]

selection.forEach(e => {e.addEventListener("click", () => {
        console.log(selection)
        let randam = Math.floor((Math.random() * 3))
        console.log(randam)
        SELECT[randam]
        console.log(SELECT[randam])
        // comp.innerHTML += SELECT[randam].emoji
        // you.innerHTML += e.name
        let newYou = document.createElement("article")
        let newComp = document.createElement("article")
        you.appendChild(newYou)
        newYou.innerHTML += e.name
        comp.appendChild(newComp)
        newComp.innerHTML += SELECT[randam].emoji
        
        if(e.name == "👊"){ 
            if (SELECT[randam].emoji == "✋") {
                let value = parseInt(resultScoreComp.innerHTML)
                value++ 
                resultScoreComp.innerHTML = value
                newComp.style.fontSize = "2rem"
            }
            if (SELECT[randam].emoji == "✌️") {
                let value = parseInt(resultScoreYou.innerHTML)
                value++ 
                resultScoreYou.innerHTML = value
                newYou.style.fontSize = "2rem"
            }
        }
        if(e.name == "✌️"){ 
            if (SELECT[randam].emoji == "✋") {
                let value = parseInt(resultScoreYou.innerHTML)
                value++ 
                resultScoreYou.innerHTML = value
                newYou.style.fontSize = "2rem"
            }
            if (SELECT[randam].emoji == "👊") {
                let value = parseInt(resultScoreComp.innerHTML)
                value++ 
                resultScoreComp.innerHTML = value
                newComp.style.fontSize = "2rem"
            }
        }
        if(e.name == "✋"){ 
            if (SELECT[randam].emoji == "👊") {
                let value = parseInt(resultScoreYou.innerHTML)
                value++ 
                resultScoreYou.innerHTML = value
                newYou.style.fontSize = "2rem"
            }
            if (SELECT[randam].emoji == "✌️") {
                let value = parseInt(resultScoreComp.innerHTML)
                value++ 
                resultScoreComp.innerHTML = value
                newComp.style.fontSize = "2rem"
            }
        }
    })
})
