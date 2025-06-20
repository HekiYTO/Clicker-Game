let clicks = 0;
let clickValue = 1;
let clickValueMultiplier = 1;
let passiveIncome = 0;
let PIS = 1000;
let button = document.querySelector('.main-button');
let counter = document.querySelector('.value');
let buttonIncome = document.querySelector('.button-income');
let buttonIncomeMultiplier = document.querySelector('.button-income-multiplier');
let buttonPassiveIncomeSpeed = document.querySelector('.button-passive-income-speed');
let buttonPassiveIncomet1 = document.querySelector('.button-passive-income-type-1');
let buttonPassiveIncomet2 = document.querySelector('.button-passive-income-type-2');
let buttonPassiveIncomet3 = document.querySelector('.button-passive-income-type-3');
let lci = document.querySelector('.lci');
let lcim = document.querySelector('.lcim');

let lpis = document.querySelector('.lpis');
let biC = 10;
let bimC = 100;
let bpisC = 100;

let lpit1 = document.querySelector('.lpit1');
let lpit2 = document.querySelector('.lpit2');
let lpit3 = document.querySelector('.lpit3');


let bpit1C = 5;
let bpit2C = 25;
let bpit3C = 100;


function upgradeBI() {
    if (biC <= clicks) {
        clicks = clicks - biC;
        biC = Math.round(biC * 2.2)
        clickValue += 1;
        lci.innerHTML = `<label class="lci"  for="">Current click value is: ${clickValue}. Click income: ${biC}$</label>`;
        console.log(`BI is ${biC} now`);
        updateCounter();
    }
}

function upgradeBIM() {
    if (bimC <= clicks) {
        clicks = clicks - bimC;
        bimC = Math.round(bimC * 1.6)
        clickValueMultiplier += 0.1;
        clickValueMultiplier = parseFloat(clickValueMultiplier.toFixed(1));
        lcim.innerHTML = `<label class="lcim"  for="">Current multiplier is: ${clickValueMultiplier}. Click income multiplier: ${bimC}$</label>`;
        console.log(`BIM is ${bimC} now`);
        updateCounter();
    }
}

function upgradePIS() {
    if (bpisC <= clicks) {
        clicks = clicks - bpisC;
        bpisC = Math.round(bpisC * 1.8)
        PIS -= 20;
        lpis.innerHTML = `<label class="pbisC"  for="">Current passive income speed: each ${PIS/1000} seconds. Passive income: ${bpisC}$</label>`;
        console.log(`PIS is ${bpisC} now`);
        updateCounter();
    }
}

function upgradePIt1() {
    if (bpit1C <= clicks) {
        clicks = clicks - bpit1C;
        bpit1C = Math.round(bpit1C * 1.5)
        passiveIncome += 1;
        lpit1.innerHTML = `<label class="lpit1"  for="">Current passive income: ${passiveIncome}. Donbass Miners: ${bpit1C}$</label>`;
        console.log(`PIt1 is ${bpit1C} now`);
        updateCounter();
    }
}

function upgradePIt2() {
    if (bpit2C <= clicks) {
        clicks = clicks - bpit2C;
        bpit2C = Math.round(bpit2C * 1.5)
        passiveIncome += 2;
        lpit2.innerHTML = `<label class="lpit2"  for="">Invest in Roshen: ${bpit2C}$</label>`;
        console.log(`PIt2 is ${bpit2C} now`);
        updateCounter();
    }
}

function upgradePIt3() {
    if (bpit3C <= clicks) {
        clicks = clicks - bpit3C;
        bpit3C = Math.round(bpit3C * 1.5)
        passiveIncome += 5;
        lpit3.innerHTML = `<label class="lpit2"  for="">Buy PrivatBank stock: 100$ ${bpit3C}$</label>`;
        console.log(`PIt3 is ${bpit3C} now`);
        updateCounter();
    }
}


function clicked() {
    clicks += clickValue * clickValueMultiplier;
    updateCounter();
}

function updateCounter() {
    counter.innerHTML = clicks.toFixed(0); 
    console.log('counter is updated');
}

button.addEventListener('click', clicked);
buttonIncome.addEventListener('click', upgradeBI);
buttonIncomeMultiplier.addEventListener('click', upgradeBIM);
buttonPassiveIncomet1.addEventListener('click', upgradePIt1);
buttonPassiveIncomet2.addEventListener('click', upgradePIt2);
buttonPassiveIncomet3.addEventListener('click', upgradePIt3);
buttonPassiveIncomeSpeed.addEventListener('click', upgradePIS);

setInterval(() => {
    clicks += passiveIncome;
    updateCounter();
}, PIS);



