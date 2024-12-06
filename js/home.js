var links = document.querySelector('.list').children;
links[0].style.color = 'lightblue';

for (var i=0; i < links.length; i++) {
    links[i].addEventListener('mouseover', e => {
        for (var j=0; j < links.length; j++)
            links[j].style.color = 'gray';
        e.target.style.color = 'lightblue';
    });
}

document.querySelector('.branding').addEventListener('animationiteration', e => {
    document.querySelector('.splashscreen').remove();

    document.querySelector('.menu').style.display = 'block';
    document.querySelector('.menu').style.visibility = 'visible';
});