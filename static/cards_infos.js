function initTextAppear() {
    let cardElements = document.querySelectorAll(".card")

    for(let index = 0; index < cardElements.length; index++) {
        let card = cardElements[index]

        const cardTitleText = card.querySelector(".card__title")
        const cardInfosText = card.querySelector(".card__infos")

        card.addEventListener("mouseover", () => textTitleAppears(cardTitleText))
        card.addEventListener("mouseout", () => textTitleDisappears(cardTitleText))

        cardTitleText.addEventListener("click", () => textInfosAppears(cardTitleText, cardInfosText))
        card.addEventListener("mouseout", () => textInfosDisappears(cardInfosText))
    }
}

function textTitleAppears(title) { title.style.display = "flex" }
function textTitleDisappears(title) { title.style.display = "none" }

function textInfosAppears(title, infos) { 
    title.style.display = "none"
    infos.style.display = "flex"
}

function textInfosDisappears(infos) { infos.style.display = "none" }



window.addEventListener('DOMContentLoaded', initTextAppear);