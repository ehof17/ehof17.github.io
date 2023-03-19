var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.4.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


const hourEL = $("#hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById('seconds');
const amplEl = document.getElementById("ampm");
const yearsEl = document.getElementById("numyears");
const factEl = document.getElementById('fact');
const specialEl = document.getElementById('special')

const  updateClock = () =>
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h == 0){h = 12;}
    if (h > 12){
        h = h-12;
        ampm = "PM"
        amplEl.style.backgroundColor = "burlywood";
    }
    h = h<10 ? "0" + h: h;
    hourEL.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    amplEl.innerText = ampm;

   
    
    //passes in a function, and a time to repeat it once timer is up
    setTimeout(() =>{updateClock()}, 1000)
    
}
updateClock();
let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

async function getResponse() {
const response = await fetch( url,
    {
        method: "GET",
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMjBjMjRlMTM0MWEyZjUyZGM5YWQ4MzEwNTdhZmZkNyIsImp0aSI6ImY3NjU0ZGViNWZjYjNhYTFmODlhZjI0NzI1ZmIyNzE5YjRjMWZkYTEwNWM1MzdiMDE0ZmM5OTMxNTQ1NjlkOWY0ZDNmMTgzYTMwZmMyYzMxIiwiaWF0IjoxNjc2MTMxMzEzLjQ5MDgyNCwibmJmIjoxNjc2MTMxMzEzLjQ5MDgyOSwiZXhwIjozMzIzMzA0MDExMy40ODkwMzMsInN1YiI6IjcxOTc2MjgzIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.vOEchvOwXiqZp6GwQ2p6IfLlUbp8XElvxdKbAFSm-C5lm4nsD4lPu0HOK2SuZo7NymkHtfEecVyuIdPACilN-7FrQs1pXfPk66fdQrMPSvjR_KNhyd2WU5harD7ac1JlgZvXfOyhX9HjtTa1PtmdKHaH26x9XKI7Mk_g__GeG9KyiAgOVYfcAFwYA-_adIkUIeku0o2rEz69iupiAI1b9wlEPibOfMGfHurnJNXbUJSorMO6E1otl15zcg4vNTW4DwYxdCwnmw4qPAdPZiRDBj4iCPRw3D8k4yyWTf9XSoaeUDajdhnu1RrSflbAR0QceoN51Rae9KO0iaHEhwbhMZF9EnMdBbmv3qa1xVcjH1r9tI4C23Ais9_gZxayrpLtWkoGnuqWZDvXp22gvh4FcnvzcrIDXEynoruVHPPQ__giB_E0s-3tEvI3hFKgBpOcxE9BfJgdNzzNU6EhVdnqvtpRXmjwCTTdT0esl9zIJK_IzMlpBf9vwaTd5azKBjO-jPn0xuZUOa0ZGALIVTs8Geg4oAKvvsEfre14FMBw6NNKvM_0wDrFbZTBOYNGVuUAGMiA0oLMA179tOQgjuKEajMgJ4fhwM7s5JzYWXDASQytSi8YO8mm2seJuRgRJTf5Wv4XuswpYjJ_IY6LqHg_2_OAIQj-UvDgfNUW3Cu_qhs',
            'Api-User-Agent': 'Ehof17 (Ehof17@gmail.com)'
        }
    }
);

const res = await response.json();
console.log(res)
let choice = Math.floor(Math.random() *4)



if (choice == 0){
let number = Math.floor(Math.random() * (res.births.length+1));

factEl.innerText = (res.births[number].text);

let lengthof = factEl.innerText.length

let num = String((lengthof / 22) * 20)
factEl.style.height = num + 'px'



years = today.getFullYear() - res.births[number].year;
yearsEl.innerText= years;
specialEl.style.display = "flex";
specialEl.innerText = 'was born';
}

else if (choice == 1){
 let number = Math.floor(Math.random() * (res.deaths.length+1));
 factEl.innerText = (res.deaths[number].text);
 let lengthof = factEl.innerText.length

 let num = String((lengthof / 22) * 20)
 factEl.style.height = num + 'px'

 years = today.getFullYear() - res.deaths[number].year;
yearsEl.innerText= years;

 specialEl.innerText = 'died';
}

else if (choice == 2){
let number = Math.floor(Math.random() * (res.selected.length+1));
factEl.innerText = (res.selected[number].text);
let lengthof = factEl.innerText.length

let num = String((lengthof / 22) * 20)
factEl.style.height = num + 'px'

years = today.getFullYear() - res.selected[number].year;
yearsEl.innerText= years;

specialEl.innerText = '';
}

else if (choice == 3){
    let number = Math.floor(Math.random() * (res.events.length+1));
    factEl.innerText = (res.events[number].text);
    let lengthof = factEl.innerText.length

   let num = String((lengthof / 22) * 20)
    factEl.style.height = num + 'px'

    years = today.getFullYear() - res.events[number].year;
    yearsEl.innerText = years;
    
    specialEl.innerText = '';
    }


//response.json().then(console.log).catch(console.error)
setTimeout(() =>{getResponse()}, 10000)
}
getResponse();

