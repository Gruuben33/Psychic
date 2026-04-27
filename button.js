class button {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
    }

    draw() {
        fill('white');
        square(this.x, this.y, buttonSize);
        fill('black');
        text(this.text, this.x + buttonSize / 2, this.y + buttonSize / 2);
    }

    checkClick() {
        if (mouseX > this.x && mouseX < this.x + buttonSize && mouseY > this.y && mouseY < this.y + buttonSize) {
            text("here", 100, 100);
            return this.text;
        } else {
            text("not here", 100, 100);
            return null;
        }
    }
}