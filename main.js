const btnAll = document.querySelector('#all');
const btnSea = document.querySelector('#sea');
const btnMountain = document.querySelector('#mountain');
const img = document.querySelectorAll('img');



btnAll.addEventListener('click', () => {
    img.forEach(imgItem => {
        imgItem.style.display = 'flex';
    });
});

btnSea.addEventListener('click', () => {
    img.forEach(imgItem => {
       if (imgItem.className == "img-sea") {
        imgItem.style.display = 'flex';
       } else {
        imgItem.style.display = 'none';
       }
    });
});

btnMountain.addEventListener('click', () => {
    img.forEach(imgItem => {
       if (imgItem.className == "img-mount") {
        imgItem.style.display = 'flex';
       } else {
        imgItem.style.display = 'none';
       }
    });
});
