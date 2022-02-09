"use strict";
(() => {
    let avengers = 150;
    console.log(avengers);
    const villanos = 20;
    if (avengers < villanos) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number('123A');
    console.log(avengers);
})();
