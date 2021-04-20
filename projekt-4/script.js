

// ustawienie daty, do której odliczam
// ustawienie aktualnej daty
//ustalenie czasu pomiędzy tymi datami
//przeliczenie czasu na sekundy
// dodanie do DOM teksty na div::before
// dodanie setInterval



function pageCountDown(){

    let countDownDate = new Date('Aug 8, 2021 00:00:00').getTime();

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
   const id =  setInterval(function(){
    pageCountDown();

   
}, 1000);



// chciałabym dodać zatrzymanie odliczania np.
// jeszcze nie wiem w którym miejscu zeby działało

// if (timeToStart < 0) {
//     clearInterval();
//     document.querySelector("#countdown").innerText = "TO JUŻ DZISIAJ! ZAPRASZAMY NA STRONĘ";
// }

//Jak zatrzyma się odliczanie to zmiana grafiki i jakiś eventListener , który włączył by stronę docelową


