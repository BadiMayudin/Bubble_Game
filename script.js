var randomnumber;
var score = 0;

// Bubble Make Code

function bubble(){
    var store = "";
for(var i = 1 ; i <=174 ; i++ ){
    var rn = Math.floor(Math.random()*10);
    store += `<div class="bubble">${rn}</div>`
}
document.querySelector("#footer").innerHTML = store
}

// Timer Make Code

function maketimer(){
    var timer = 60  ;
   var clearTime = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#box2").innerHTML = timer;
        }else{
            setTimeout(clearTime);
            document.querySelector("#footer").innerHTML = `<div id="game"><h1>Game Over</h1></div>`;
            document.querySelector("#ptop").innerHTML = `<h1 class="score">Score Is</h1><div class="box">${score}</div>`
        }
       
    }, 1000);
}
function makeHit(){
     randomnumber = Math.floor(Math.random()*10);
    document.querySelector("#box1").textContent = randomnumber;
}

// Score Incress Code

function Makescore(){
    score +=10;
    document.querySelector("#box3").textContent = score
}

// Score Make Code

document.querySelector("#footer")
.addEventListener("click",function(dets){
    var clicknum =Number(dets.target.textContent);

    if(clicknum === randomnumber){
        Makescore();
        bubble()
        makeHit()
    }
})

// All Function Run

makeHit()
maketimer();
bubble();