class button {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.size = windowWidth / 10;
    }

    draw() {
        fill('white');
        square(this.x, this.y, this.size);
        fill('black');
        text(this.text, this.x + this.size / 2, this.y + this.size / 2);
    }

    checkClick() {
        if (mouseX > this.x && mouseX < this.x + this.size && mouseY > this.y && mouseY < this.y + this.size) {
            return this.text;
        } else {
            return null;
        }
    }
}