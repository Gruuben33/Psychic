function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    buttonSize = windowWidth / 20;
    responses = {};
    currentQuestion = 0;
    questions = [];
    questions.push(
    new question("Start Quiz!", ["Start"]), 
    //new question("What is your name?", []), 
    new question("How many pets do you have?", ["0", "1", "2", "3", "4", "5+"]),
    new question("Do you live in an urban area?", ["Yes", "No"]),
    new question("Do you like video games?", ["Yes", "No"]),
    new question("Do you like to read?", ["Yes", "No"]),
    new question("How old do you think I am? Please enter a number from 1 to 8192", []),
    new question("Do you partake in extracurriculars?", ["Yes", "No"]),
    new question("Do you enjoy homework?", ["Yes", "No"]),
    new question("How do you get to school?", ["Bus", "Car", "Bike", "Walk", "Helicopter"]),
    new question("Do you like to play sports?", ["Yes", "No"]),
    new question("What is your favorite season?", ["Winter", "Spring", "Summer", "The other one"]));
    buttons = [];
    textAlign(CENTER, CENTER);
    textSize = 30;
    drawQuestion();
}

function drawQuestion() {
    questions[currentQuestion].draw();
    if (currentQuestion == 5) {
        text(Object.values(responses).join(", "), 100, 300);
    }
}

function mouseClicked() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checkClick() != null) {
            responses[currentQuestion] = buttons[i].checkClick();
            currentQuestion++;
            clear();
            buttons = [];
            background(220);
            drawQuestion();
            return;
        }
    }
}