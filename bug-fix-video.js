;(function (doc) {
    'use strict';

    let iframes = document.getElementsByClassName('actAsDiv');

    if (iframes.length) {
        let width = iframes[0].parentElement.offsetWidth * 9 / 16;
        iframes[0].style['height'] = width+'px'
    }

})(document);