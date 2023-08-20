const ratingBtn1 = document.querySelector('#rating-btn1')
const ratingBtn2 = document.querySelector('#rating-btn2')
const ratingBtn3 = document.querySelector('#rating-btn3')
const ratingBtn4 = document.querySelector('#rating-btn4')
const ratingBtn5 = document.querySelector('#rating-btn5')
const submitBtn = document.querySelector('#submit-btn')

ratingBtn1.addEventListener('click', () => {
    ratingBtn1.classList.toggle('rating-btn-clicked')
    document.querySelector('#rating-text')
    .innerHTML = '1';

    if(ratingBtn2.classList.contains('rating-btn-clicked') || ratingBtn3.classList.contains('rating-btn-clicked') || ratingBtn4.classList.contains('rating-btn-clicked') || ratingBtn5.classList.contains('rating-btn-clicked')) {
        ratingBtn2.classList.remove('rating-btn-clicked')
        ratingBtn3.classList.remove('rating-btn-clicked')
        ratingBtn4.classList.remove('rating-btn-clicked')
        ratingBtn5.classList.remove('rating-btn-clicked')
    }
})

ratingBtn2.addEventListener('click', () => {
    document.querySelector('#rating-text')
    .innerHTML = '2';
    ratingBtn2.classList.toggle('rating-btn-clicked')

    if(ratingBtn1.classList.contains('rating-btn-clicked') || ratingBtn3.classList.contains('rating-btn-clicked') || ratingBtn4.classList.contains('rating-btn-clicked') || ratingBtn5.classList.contains('rating-btn-clicked')) {
        ratingBtn1.classList.remove('rating-btn-clicked')
        ratingBtn3.classList.remove('rating-btn-clicked')
        ratingBtn4.classList.remove('rating-btn-clicked')
        ratingBtn5.classList.remove('rating-btn-clicked')
    }
})

ratingBtn3.addEventListener('click', () => {
    document.querySelector('#rating-text')
    .innerHTML = '3';
    ratingBtn3.classList.toggle('rating-btn-clicked')

    if(ratingBtn1.classList.contains('rating-btn-clicked') || ratingBtn2.classList.contains('rating-btn-clicked') || ratingBtn4.classList.contains('rating-btn-clicked') || ratingBtn5.classList.contains('rating-btn-clicked')) {
        ratingBtn1.classList.remove('rating-btn-clicked')
        ratingBtn2.classList.remove('rating-btn-clicked')
        ratingBtn4.classList.remove('rating-btn-clicked')
        ratingBtn5.classList.remove('rating-btn-clicked')
    }
})

ratingBtn4.addEventListener('click', () => {
    ratingBtn4.classList.toggle('rating-btn-clicked');
    document.querySelector('#rating-text')
    .innerHTML = '4';

    if(ratingBtn1.classList.contains('rating-btn-clicked') || ratingBtn2.classList.contains('rating-btn-clicked') || ratingBtn3.classList.contains('rating-btn-clicked') || ratingBtn5.classList.contains('rating-btn-clicked')) {
        ratingBtn1.classList.remove('rating-btn-clicked')
        ratingBtn2.classList.remove('rating-btn-clicked')
        ratingBtn3.classList.remove('rating-btn-clicked')
        ratingBtn5.classList.remove('rating-btn-clicked')
    }
})

ratingBtn5.addEventListener('click', () => {
    ratingBtn5.classList.toggle('rating-btn-clicked');
    document.querySelector('#rating-text')
    .innerHTML = '5';

    if(ratingBtn1.classList.contains('rating-btn-clicked') || ratingBtn2.classList.contains('rating-btn-clicked') || ratingBtn3.classList.contains('rating-btn-clicked') || ratingBtn4.classList.contains('rating-btn-clicked')) {
        ratingBtn1.classList.remove('rating-btn-clicked')
        ratingBtn2.classList.remove('rating-btn-clicked')
        ratingBtn3.classList.remove('rating-btn-clicked')
        ratingBtn4.classList.remove('rating-btn-clicked')
    }
})

submitBtn.addEventListener('click', () => {
    if(ratingBtn1.classList.contains('rating-btn-clicked') || ratingBtn2.classList.contains('rating-btn-clicked') || ratingBtn3.classList.contains('rating-btn-clicked') || ratingBtn4.classList.contains('rating-btn-clicked') || ratingBtn5.classList.contains('rating-btn-clicked')) {
        document.querySelector('#rc-body-pre-click')
        .classList.add('rc-body-pre-click-invisible');
        
        document.querySelector('#rc-body-post-click')
        .classList.add('rc-body-post-click-visible');
    }
})
