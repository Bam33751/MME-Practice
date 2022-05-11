


function init(){

    let boardEL = document.querySelector(".board");
    let targetEL = document.querySelector(".target");
    
    let targets = Target.createRandomTargetList(16, 50);

    for(let i = 0; i < targets.length; i++){
        boardEL.append(targets[i].createNode());
    }

    boardEL.addEventListener("click", onBoardClicked);

}

function onBoardClicked(event){
    let isTarget = event.target.getAttribute("data-is-Target")
    console.log(isTarget);
}
init();