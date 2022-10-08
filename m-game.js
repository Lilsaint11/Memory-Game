let cards = document.querySelectorAll(".card");
let firstCard, secondCard;
let matchedCard = 0;
let disableBoard = false;

function flip(e){
    let targetCard = e.target;
    if(targetCard != firstCard && !disableBoard){
        targetCard.classList.add("flip");
        if(!firstCard){
            return firstCard = targetCard;
        }
        secondCard = targetCard;
        disableBoard = true;

        let firstCardImg = firstCard.querySelector("img").src;
        let secondCardImg = secondCard.querySelector("img").src;
        matchCards(firstCardImg,secondCardImg);
    }
}

function matchCards(img1,img2){
    if(img1 === img2){
        matchedCard++;
        if(matchedCard == 8){
            setTimeout(() =>{
                return shuffleCard();
            },1000);
        }
        firstCard.removeEventListener("click", flip);
        secondCard.removeEventListener("click", flip);
        firstCard = secondCard = "";
        disableBoard = false;
    }else{
        setTimeout(() =>{
            firstCard.classList.add("shake");
            secondCard.classList.add("shake");
            
        },400)
        setTimeout(() =>{
            firstCard.classList.remove("shake","flip");
            secondCard.classList.remove("shake","flip");
            firstCard = secondCard = "";
            disableBoard = false;
        },800)
  }
}

function shuffleCard(){
    matchedCard = 0;
    firstCard = secondCard = "";

    cards.forEach(card =>{
        card.classList.remove("flip");
       let randomCards = Math.floor(Math.random()* 16);
       card.style.order = randomCards;
       card.addEventListener("click", flip);
    });
};

shuffleCard();

cards.forEach(card =>{
    card.addEventListener("click", flip);
});