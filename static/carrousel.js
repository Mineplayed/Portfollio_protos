// {
//     scrollView: null,
//     itemAmount: 0,
//     currentItemIndex: 0
// }
let carrousels = [];

function initCarrousel() {
    let carrouselElements = document.querySelectorAll('.carrousel');

    for(let index = 0; index < carrouselElements.length; index++) {
        let carrousel = carrouselElements[index];

        carrousels.push(
            {
                scrollView: carrousel.querySelector('.carrousel__content'),
                itemAmount: carrousel.querySelectorAll('.about__item').length,
                currentItemIndex: 0
            }
        );

        const carrouselNavigationBtns = carrousel.querySelectorAll('.carrousel__nav');
        carrouselNavigationBtns[0].addEventListener('click', () => ChangeCarrouselItemAbout(index, -1) );
        carrouselNavigationBtns[1].addEventListener('click', () => ChangeCarrouselItemAbout(index, 1) );
    }
}

function ChangeCarrouselItemAbout(index, direction) {
    let carrousel = carrousels[index]

    carrousel.currentItemIndex += direction;
    
    if (carrousel.currentItemIndex < 0)
    {
        direction = carrousel.itemAmount;
        carrousel.currentItemIndex = carrousel.itemAmount - 1;
    }

    if (carrousel.currentItemIndex >= carrousel.itemAmount)
    {
        direction = -carrousel.itemAmount
        carrousel.currentItemIndex = 0;
    }

    carrousel.scrollView.scrollBy({
        left: direction * carrousel.scrollView.clientWidth,
        behavior: 'smooth'
    });
}

window.addEventListener('DOMContentLoaded', initCarrousel);
