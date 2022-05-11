class  Color{
    constructor (r, g, b){
        this.r = r;
        this.g = g;
        this.b = b; 
    }

    toCSS(){
        return "rgb(", + this.r + "," + this.g + "," + this.b + ")"
    }

    static getDeviatingColor(deviation){
        return this.r - deviation, this.g - deviation, this.b - deviation;
    }
    
    static getRandomColor(){
        let r = parseInt(Math.random() * 256);
        let g = parseInt(Math.random() * 256);
        let b = parseInt(Math.random() * 256);
        
        return new Color(r,g,b);
    }
}