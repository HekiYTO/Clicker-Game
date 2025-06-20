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
let buttonPassiveIncome = document.querySelector('.button-passive-income');
let lci = document.querySelector('.lci');
let lcim = document.querySelector('.lcim');
let lpi = document.querySelector('.lpi');
let lpis = document.querySelector('.lpis');
let biC = 10;
let bimC = 100;
let bpisC = 100;
let bpiC = 5;


function upgradeBI() {
    if (biC <= clicks) {
        clicks = clicks - biC;
        biC = Math.round(biC * 3)
        clickValue += 1;
        lci.innerHTML = `<label class="lci"  for="">Current click value is: ${clickValue}. Click income: ${biC}$</label>`;
        console.log(`BI is ${biC} now`);
        updateCounter();
    }
}

function upgradeBIM() {
    if (bimC <= clicks) {
        clicks = clicks - bimC;
        bimC = Math.round(bimC * 2)
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
        bpisC = Math.round(bpisC * 2)
        PIS -= 20;
        lpis.innerHTML = `<label class="pbisC"  for="">Current passive income speed: each ${PIS/1000} seconds. Passive income: ${bpisC}$</label>`;
        console.log(`PIS is ${bpisC} now`);
        updateCounter();
    }
}

function upgradePI() {
    if (bpiC <= clicks) {
        clicks = clicks - bpiC;
        bpiC = Math.round(bpiC * 2)
        passiveIncome += 1;
        lpi.innerHTML = `<label class="lpi"  for="">Current passive income: ${passiveIncome}. Passive income: ${bpiC}$</label>`;
        console.log(`PI is ${bpiC} now`);
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
buttonPassiveIncome.addEventListener('click', upgradePI);
buttonPassiveIncomeSpeed.addEventListener('click', upgradePIS);

setInterval(() => {
    clicks += passiveIncome;
    updateCounter();
}, PIS);



