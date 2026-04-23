# Psychic
## Objective
Find favourite number and colour by using machine learning and calculating linear regression.
## Psuedocode
response will be a class with variables for each question and a guess at favourite number and colour
- response.name = first question answer (string)
- response.pets = second question answer (integer between 0 and 10)
- response.urban = thrid question answer (Boolean Yes or No)
- response.games = fourth question answer (Boolean Yes or No)
- response.read = fifth question answer (Boolean Yes or No)
- response.myAge = sixth question answer (integer between 1 and 8,192)
- response.extracurricular = seventh question answer (Boolean Yes or No)
- response.homework = eighth question answer (Boolean Yes or No)
- response.getToSchool = ninth question answer (Bus = 1, Car = 2, Bike = 3, Walk = 4, Helicopter = 5)
- response.sports = tenth question answer (Boolean Yes or No)
- resoonse.season = eleventh question answer (Winter = 1, Spring = 2, Summer = 3, the other one = 4)
- response.number = ax + by + cz ... one term for each question apart from name to guess favourite number
- response.colour = ax + by + cz ... one term for each question apart from name to guess favourite colour

questions will be a class with variables for questions and answers
- question.question = string text for question
- question.buttons = # of buttons that this question has
- question.interact() = record answer or open text box

draw start screen
- title card
- start quiz button

onMouseClick() 
if mouseX and mouxeY in buttonWidth and buttonHeight
question.interact()