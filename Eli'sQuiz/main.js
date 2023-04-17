const answers = new URLSearchParams(window.location.search);
let counter = 4;
const q1 = answers.get('q1');
const q2 = answers.get('q2');
const q3 = answers.get('q3');
const q4 = answers.get('q4');


console.log(q1);


if (q1!=="CHA"){
    counter--;
    document.getElementById(q1).style.backgroundColor = "#9A3334";
    document.getElementById('A1').style.backgroundColor = "#9A3334";

    }
if (q2!=="5"){
    counter--;
    document.getElementById(q2).style.backgroundColor = "#9A3334";
    document.getElementById('A2').style.backgroundColor = "#9A3334";

    }   
if (q3!=="OKC"){
    counter--;
    document.getElementById(q3).style.backgroundColor = "#9A3334";
    document.getElementById('A3').style.backgroundColor = "#9A3334";

    }
if (q4!=="DET"){
    counter--;
    document.getElementById(q4).style.backgroundColor = "#9A3334";
    document.getElementById('A4').style.backgroundColor = "#9A3334";

    }         
const results = document.getElementById('results');

console.log(results);
let percent = counter/4 * 100;
results.innerText=(`Your results: ${counter} / 4  ${percent}%`);