

window.addEventListener("scroll", reveal);

function reveal() {

    // reveals: animation to reveal elements upwards
    // cardReveal: reveals elements from the left
    // cardRevealRight: reveals elements from the right
    let reveals = document.querySelectorAll('#reveal');
    let cardReveal = document.querySelectorAll('#card-reveal');
    let cardRevealRight = document.querySelectorAll('#card-revealRight');

    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }

        //The else statement sends the selemensts back to invisible, when you scroll upwards
        // else{
        //     reveals[i].classList.remove('active');
        // }
    }

    for(let i = 0; i < cardReveal.length; i++){
        let windowHeight = window.innerHeight;
        let cardRevealTop = cardReveal[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(cardRevealTop < windowHeight - revealPoint){
            cardReveal[i].classList.add('active');
        }
        // else{
        //     cardReveal[i].classList.remove('active');
        // }

    }
    
    for(let i = 0; i < cardRevealRight.length; i++){
        let windowHeight = window.innerHeight;
        let cardRevealRightTop = cardRevealRight[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(cardRevealRightTop < windowHeight - revealPoint){
            cardRevealRight[i].classList.add('active');
        }
        // else{
        //     cardRevealRight[i].classList.remove('active');
        // }

    }

    
}

