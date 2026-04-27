class question {
    constructor(text, options) {
        this.text = text;
        this.options = options;
        this.textBox = false;
        if (this.options.length == 0) {
            this.textBox = true;
        }
    }

    draw() {
        if (this.textBox) {
            fill('white');
            rect(50, 50, 300, 100);
            fill('black');
            text(this.text, 200, 100);
        } else {
            text(this.text, windowWidth/2, 100);
            for (let i = 0; i < this.options.length; i++) {
                buttons.push(new button(this.options[i], windowWidth/2, 200 + i * buttonSize));
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].draw();
            }
        }
    }
}