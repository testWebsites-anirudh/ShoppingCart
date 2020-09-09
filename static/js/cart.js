var container = document.getElementsByClassName('container');
var items = document.getElementsByClassName('items');
var sum = document.getElementsByClassName('sum');
var hidden = document.getElementsByClassName('hidden');

var localStorage = window.localStorage;

var iPhone, onePlus, s10, pixel, iPhoneSrc, onePlusSrc, s10Src, pixelSrc, iPhonePrice, onePlusPrice, s10Price, pixelPrice,total;

function setVariables() {
    iPhone = localStorage.getItem('iPhone 11');
    onePlus = localStorage.getItem('OnePlus 6T');
    s10 = localStorage.getItem('S10 Plus');
    pixel = localStorage.getItem('Pixel 4');

    iPhoneSrc = localStorage.getItem('iPhone 11Src');
    onePlusSrc = localStorage.getItem('OnePlus 6TSrc');
    s10Src = localStorage.getItem('S10 PlusSrc');
    pixelSrc = localStorage.getItem('Pixel 4Src');

    iPhonePrice = 1000 * iPhone;
    onePlusPrice = 900 * onePlus;
    pixelPrice = 800 * pixel;
    s10Price = 900 * s10;

    total = iPhonePrice + onePlusPrice + pixelPrice + s10Price;

    hidden[0].innerHTML = `<input type="hidden" name="iphone" value="${iPhone}">
    <input type="hidden" name="oneplus" value="${onePlus}">
    <input type="hidden" name="pixel" value="${pixel}">
    <input type="hidden" name="s10" value="${s10}">`;

    if(iPhone <= 0 && onePlus <= 0 && s10 <= 0 && pixel <= 0){
        container[0].innerHTML = `<h4>Cart is empty</h4>`;
    }

    if (iPhone > 0) {
        container[0].innerHTML += `<div class="card">
                                <img src="${iPhoneSrc}" alt="iPhone 11">
                                <div class="text">
                                    <h5>iPhone 11</h5>
                                    <p>Qty: ${iPhone}<br>Price: $1000</p>  
                                </div>
                                </div>`;

        items[0].innerHTML += `<div class="row">
                                <p>iPhone 11 * ${iPhone}</p>
                                <p>$${iPhonePrice}</p>
                                </div>`;
    }

    if (onePlus > 0) {
        container[0].innerHTML += `<div class="card">
                                <img src="${onePlusSrc}" alt="OnePlus 6T">
                                <div class="text">
                                    <h5>OnePlus 6T</h5>
                                    <p>Qty: ${onePlus}<br>Price: $900</p>  
                                </div>
                                </div>`;

        items[0].innerHTML += `<div class="row">
                                <p>OnePlus 6T * ${onePlus}</p>
                                <p>$${onePlusPrice}</p>
                                </div>`;
    }

    if (pixel > 0) {
        container[0].innerHTML += `<div class="card">
                                <img src="${pixelSrc}" alt="Pixel 4">
                                <div class="text">
                                    <h5>Pixel 4</h5>
                                    <p>Qty: ${pixel}<br>Price: $800</p>  
                                </div>
                                </div>`;

        items[0].innerHTML += `<div class="row">
                                <p>Pixel 4 * ${pixel}</p>
                                <p>$${pixelPrice}</p>
                                </div>`;
    }

    if (s10 > 0) {
        container[0].innerHTML += `<div class="card">
                                <img src="${s10Src}" alt="S10 Plus">
                                <div class="text">
                                    <h5>S10 Plus</h5>
                                    <p>Qty: ${s10}<br>Price: $900</p>  
                                </div>
                                </div>`;

        items[0].innerHTML += `<div class="row">
                                <p>S10 Plus * ${s10}</p>
                                <p>$${s10Price}</p>
                                </div>`;
    }
    
    sum[0].innerHTML = `<p>Total</p> <p>$${total}</p>`;

    

}

document.body.addEventListener('load', setVariables());

