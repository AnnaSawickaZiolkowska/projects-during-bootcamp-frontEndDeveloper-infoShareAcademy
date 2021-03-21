

// ustawienie daty, do której odliczam

// let countDownDate = new Date('march 21, 2021 22:57:50').getTime();
let countDownDate = new Date('Aug 8, 2021 00:00:00').getTime();


setInterval(function(){

function pageStart(){
    const now = new Date().getTime();
        timeToStart = countDownDate - now;

        const second = 1000;     
        const minute = second * 60;
        const hour = minute * 60;     
        const day = hour * 24;

    const d = Math.floor(timeToStart/(day));
    const h = Math.floor((timeToStart % (day))/(hour));
    const m = Math.floor((timeToStart % (hour))/(minute));
    const s = Math.floor((timeToStart % (minute))/(second));

    document.querySelector('#day').innerText = d;
    document.querySelector('#hour').innerText = h;
    document.querySelector('#minute').innerText = m;
    document.querySelector('#second').innerText = s;
    
  
};

    pageStart();

    if (timeToStart < 0) {
        clearInterval();
        document.querySelector("#countdown").innerText = "TO JUŻ DZISIAJ! ZAPRASZAMY NA STRONĘ";
    }
}, 1000);