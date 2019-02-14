class Brush { 
    constructor(strokeSize, Colour) {
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.name = "Brush";
        this.mX = mouseX;
        this.mY = mouseY;
    }

    display() {
        strokeCap(ROUND);
        strokeWeight(this.strokeSize);
        stroke(this.Colour);
        if(objects != 0) {
            if (mainObjects.item[objects-1].name == "Brush") {
                line(this.mX, this.mY, mainObjects.item[objects-1].mX, mainObjects.item[objects-1].mY);
            }   
            
        }
    }
}