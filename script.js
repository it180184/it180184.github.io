const images = [
    'java.png',
    'html_css_javascript.png',
    'cc.png',
    'msoffice.jpg'
];

const image = document.getElementById('logos');

let current = 3;

function changeImage() {

    current++;

    if (current == images.length) {
        current = 0;
    }

    image.src = 'img/' + images[current];
};

setInterval(changeImage, 4000);

changeImage();