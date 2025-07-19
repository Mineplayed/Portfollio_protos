let interval = 2000;
let textSwapperScrollView = null;
let textSwapperItemCount = 0;
let currentItemIndex = 0;

function inittextSwapper() {
    textSwapperScrollView = document.querySelector('.textSwapper__content');
    textSwapperItemCount = document.querySelectorAll('.textSwapper__item').length;

    setInterval(ChangetextSwapperItem, interval);
}

function ChangetextSwapperItem() {
    currentItemIndex++;

    if (currentItemIndex >= textSwapperItemCount)
    {
        currentItemIndex = 1;

        textSwapperScrollView.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }


    textSwapperScrollView.scrollBy({
        top: textSwapperScrollView.clientHeight,
        behavior: 'smooth'
    });
}

window.addEventListener('DOMContentLoaded', inittextSwapper);
