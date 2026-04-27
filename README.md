# Psychic
## Objective
Find favourite number and colour by using machine learning and calculating linear regression.
## Psuedocode
questions will be a class with variables for questions and answers
- question.question = string text for question
- question.buttons = # of buttons that this question has
- question.interact() = record answer and increment current question or open text box

draw start screen
- responses
- current question = 0
- questions = []
- title card
- start quiz button

onMouseClick() 
if mouseX and mouxeY in buttonWidth and buttonHeight
return answer to question dictioinary, use current question as key
current question += 1