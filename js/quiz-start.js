let total = 0;
let questionNumber = 0;
let time = 60;
let interval;
let q = document.getElementById('question');
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');
const questionList = [
    {
        'q': "Which one of these is native to Sri Lanka?",
        'a1': "CoffeeRubber",
        'a2': "Tea",
        'a3': "Cinnamon",
        'a4': "RubberCoffee",
        "correct": "a3",
        "result": "Not Given",
    },
    {
        'q': "Which Sri Lankan rock palace-fortress, can you find a mirror wall with graffiti and fresco paintings on the sheer rock?",
        'a1': "Polonnaruwa",
        'a2': "Sigiriya",
        'a3': "Mihintale",
        'a4': "Anuradhapura",
        "correct": "a2",
        "result": "Not Given",
    },
    {
        'q': "Rama's Bridge in Sri Lanka is also known by which Biblical name?",
        'a1': "Adam's Bridge",
        'a2': "Noah's Bridge",
        'a3': "Abraham's Bridge",
        'a4': "Jonah's Bridge",
        "correct": "a1",
        "result": "Not Given",
    },
    {
        'q': "What is the capital of Sri Lanka?",
        'a1': "Anuradhapura",
        'a2': "Kotte",
        'a3': "Colombo",
        'a4': "Kandy",
        "correct": "a2",
        "result": "Not Given",
    },
    {
        'q': "Ratnapura, is a town famous for ................?",
        'a1': "exotic spices",
        'a2': "gems",
        'a3': "elephant orphanage",
        'a4': "glorious beaches",
        "correct": "a2",
        "result": "Not Given",
    },
    {
        'q': "From the following answers, what's another name for Sri Lanka?",
        'a1': "Ceylak",
        'a2': "Reseyn",
        'a3': "Ceylon",
        'a4': "Thambawarna",
        "correct": "a3",
        "result": "Not Given",
    },
    {
        'q': "What is the name of the tallest mountain in Sri Lanka?",
        'a1': "Single Tree",
        'a2': "Pidurutalagala",
        'a3': "Namunukula",
        'a4': "Theodora Hill",
        "correct": "a2",
        "result": "Not Given",
    },
    {
        'q': "In which province is Temple of the Tooth situated?",
        'a1': "Central Province",
        'a2': "Southern Province",
        'a3': "Uva Province",
        'a4': "Northern Province",
        "correct": "a1",
        "result": "Not Given",
    },
    {
        'q': "Which of these Sri Lankan cities is NOT on the coast?",
        'a1': "Colombo",
        'a2': "Kandy",
        'a3': "Jaffna",
        'a4': "Galle",
        "correct": "a2",
        "result": "Not Given",
    },
    {
        'q': "Where is this iconic viaduct bridge of Sri Lanka located?",
        'a1': "Ella",
        'a2': "Hatton",
        'a3': "Nuwara Eliya",
        'a4': "Kandy",
        "correct": "a1",
        "result": "Not Given",
    }
];

function nextQuestion(){

    if (getRadioValue(document.answers.answer) === ""){
        alert("Please select an answer");
    }
    else{
        checkAnswer();

        document.answers.reset();

        if (questionNumber===(questionList.length-2)){
            document.getElementById("button-next").innerHTML = 'Submit <i id="btn-icon" class="fa-solid fa-square-caret-right"></i>';
            document.getElementById('btn-icon').classList.remove('fa-square-caret-right');
            document.getElementById('btn-icon').classList.add('fa-square-check');
            // setTimeout(function () {
            //     document.getElementById('btn-icon').classList.add('fa-solid');
            // },5000);
        }

        if (questionNumber<questionList.length-1){
            questionNumber ++;

            q.classList.add("hide-text");
            a1.classList.add("hide-text");
            a2.classList.add("hide-text");
            a3.classList.add("hide-text");
            a4.classList.add("hide-text");

            setTimeout(function(){
                q.innerHTML = questionList[questionNumber]['q'];
                document.getElementById('a1').innerHTML = questionList[questionNumber]['a1'];
                document.getElementById('a2').innerHTML = questionList[questionNumber]['a2'];
                document.getElementById('a3').innerHTML = questionList[questionNumber]['a3'];
                document.getElementById('a4').innerHTML = questionList[questionNumber]['a4'];
                q.classList.remove('hide-text');
                a1.classList.remove("hide-text");
                a2.classList.remove("hide-text");
                a3.classList.remove("hide-text");
                a4.classList.remove("hide-text");
            },500);
        }
        else{
            resultCard();
        }
    }


    console.log("Total :"+total);
}

function getRadioValue(radioArray){
    for(let i=0;i<radioArray.length; i++){
        if (radioArray[i].checked){
            return radioArray[i].value;
        }
    }
    return "";
}

function checkAnswer(){
    let correctAnswer = questionList[questionNumber]["correct"];
    let selected = getRadioValue(document.answers.answer);

    questionList[questionNumber]["given"] = selected;

    if (selected===correctAnswer){
        total += 2;
        questionList[questionNumber]["result"] = "Correct";
    }
    else{
        total -= 1;
        questionList[questionNumber]["result"] = "Incorrect";
    }
}

function startTimer(){
     interval = setInterval(function () {
        document.getElementById('time-second').innerHTML = ((time-1) % 10).toString();
        document.getElementById('time-first').innerHTML = Math.floor((time-1)/10).toString();

        console.log(time);
        time--;

        if (time === 0) {
            clearInterval(interval);
            resultCard();
        }

    },1000);
}

function displayResult(){

    for(let i=0;i<questionList.length;i++){

        let questionNum = document.getElementsByClassName('question-num')[i];

        questionNum.innerHTML = "Question - "+(i+1)+" : "+questionList[i]['result'];

        document.getElementsByClassName('result-'+questionList[i]['correct'])[i].style.backgroundColor = '#039487';
        document.getElementsByClassName('result-'+questionList[i]['correct'])[i].style.color = 'white';

        if(questionList[i]['result']==="Incorrect"){
            questionNum.style.backgroundColor = '#EC1C24';
            document.getElementsByClassName('result-'+questionList[i]['given'])[i].style.backgroundColor = '#EC1C24';
            document.getElementsByClassName('result-'+questionList[i]['given'])[i].style.color = 'white';

        }

        else if(questionList[i]['result']==="Not Given"){
            questionNum.style.backgroundColor = '#E68C36';
        }

        document.getElementsByClassName('result-question')[i].innerHTML = questionList[i]['q'];

        document.getElementsByClassName('result-a1')[i].innerHTML = questionList[i]['a1'];
        document.getElementsByClassName('result-a2')[i].innerHTML = questionList[i]['a2'];
        document.getElementsByClassName('result-a3')[i].innerHTML = questionList[i]['a3'];
        document.getElementsByClassName('result-a4')[i].innerHTML = questionList[i]['a4'];
    }
}

function resultCard(){
    document.getElementById('user-time').innerHTML = 'Time : '+(60-time);
    clearInterval(interval);

    displayResult();

    if(total<0){
        total = 0
    }

    document.getElementById('marks').innerHTML = 'Marks : '+total;
    q.classList.add("hide-text");
    a1.classList.add("hide-text");
    a2.classList.add("hide-text");
    a3.classList.add("hide-text");
    a4.classList.add("hide-text");
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementsByTagName('body')[0].style.backgroundImage = 'none';

    if(total<=5){
        document.getElementsByTagName('body')[0].style.backgroundColor = '#ff5252';
    }
    else if(total<=15){
        document.getElementsByTagName('body')[0].style.backgroundColor = '#ffab40';
    }
    else{
        document.getElementsByTagName('body')[0].style.backgroundColor = '#00e676';
    }
}

document.getElementById('button-homepage').addEventListener("click", function () {
    window.location.href = 'main.html'
})

window.addEventListener("load", function (){
    document.getElementById('question').innerHTML = questionList[0]['q'];
    document.getElementById('a1').innerHTML = questionList[0]['a1'];
    document.getElementById('a2').innerHTML = questionList[0]['a2'];
    document.getElementById('a3').innerHTML = questionList[0]['a3'];
    document.getElementById('a4').innerHTML = questionList[0]['a4'];
    startTimer();
});