function setup() {
    createCanvas(400, 400);
    background(220);
    responses = {};
    currentQuestion = 0;
    questions = [];
    questions.push(
    new question("Start Quiz!", ["Start"]), 
    new question("What is your name?", []), 
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
}

function mouseClicked() {
    for (let button of buttons) {
        if (button.checkClick() != null) {
            responses[currentQuestion] = button.checkClick();
            currentQuestion++;
            clear();
            background(220);
            drawQuestion();
        }
    }
}