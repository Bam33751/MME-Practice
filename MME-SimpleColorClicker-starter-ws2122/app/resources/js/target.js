class Target{

    constructor(color, isTarget){
        this.color = color;
        this.isTarget = isTarget;
    }

    createNode(){
        let el = document.createElement("span");
        el.classList.add("target");
        el.style.background = this.color;        
        el.setAttribute("data-is-target", this.isTarget);

        return el;
    }

    static createRandomTargetList(numberOfTargets, deviation){
        let color = Color.getRandomColor();
        let devColor = Color.getDeviatingColor(deviation);
        let targets = [];

        for (let i = 0; i < numberOfTargets ;i++){
            let target  = new Target(color, false);
            targets.push(target);
        }

        return targets;
    }





}