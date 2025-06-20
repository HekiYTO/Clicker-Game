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
let piCounter = document.querySelector('.passive-income')
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

let IVCM = 3;
function upgradeBI() {
    if (biC <= clicks) {
        clicks = clicks - biC;
        biC = Math.round(biC * IVCM)
        if (IVCM >= 1.1) {
            IVCM -= 0.1;
        }
        clickValue += 1;
        lci.innerHTML = `<label class="lci"  for="">Click income: ${biC}$</label>`;
        buttonIncome.value = clickValue
        console.log(`BI is ${biC} now`);
        updateCounter();
        updatePICounter()
    }
}

let IVCMM = 3;
function upgradeBIM() {

     if (bimC <= clicks) {
        clicks = clicks - bimC;
        bimC = Math.round(bimC * IVCMM)
        if (IVCMM >= 1.1) {
            IVCMM -= 0.1;
        }
        clickValueMultiplier += 0.1;
        clickValueMultiplier = parseFloat(clickValueMultiplier.toFixed(1));
        lcim.innerHTML = `<label class="lcim"  for=""> Click income multiplier: ${bimC}$</label>`;
        buttonIncomeMultiplier.value = clickValueMultiplier
        console.log(`BIM is ${bimC} now`);
        updateCounter();
        updatePICounter();
        }
    }
    

let PISMC = 3;
function upgradePIS() {
    if (bpisC <= clicks) {
        if (PIS >= 550) {
        clicks = clicks - bpisC;
        bpisC = Math.round(bpisC * PISMC)
        if (PISMC >= 1.1) {
            PISMC -= 0.1;
        }
        PIS -= 50;
        lpis.innerHTML = `<label class="pbisC"  for="">Passive income: ${bpisC}$</label>`;
        buttonPassiveIncomeSpeed.value = `${PIS/1000}S`
        console.log(`PIS is ${bpisC} now`);
        updateCounter();
        updatePICounter()
        } else {
            PIS = 500;
            clicks = clicks - bpisC;
            buttonPassiveIncomeSpeed.value = `Max(0.5s)`
            console.log(`${PIS} its max`)
            lpis.innerHTML = `<label class="pbisC"  for="">Passive income is max</label>`;
        }
        
    }
}
        
let PICMT1 = 2;
function upgradePIt1() {
    if (bpit1C <= clicks) {
        clicks = clicks - bpit1C;
        
        bpit1C = Math.round(bpit1C * PICMT1)
        if (PICMT1 >= 1.1) {
            PICMT1 -= 0.1;
        }
        passiveIncome += 1;
        lpit1.innerHTML = `<label class="lpit1"  for="">Donbass Miners: ${bpit1C}$</label>`;
        console.log(`PIt1 is ${bpit1C} now`);
        updateCounter();
        updatePICounter()
    }
}

let PICMT2 = 2;
function upgradePIt2() {
    if (bpit2C <= clicks) {
        clicks = clicks - bpit2C;
        bpit2C = Math.round(bpit2C * PICMT2)
        if (PICMT2 >= 1.1) {
            PICMT2 -= 0.1;
        }
        passiveIncome += 3;
        lpit2.innerHTML = `<label class="lpit2"  for="">Invest in Roshen: ${bpit2C}$</label>`;
        console.log(`PIt2 is ${bpit2C} now`);
        updateCounter();
        updatePICounter()
    }
}

let PICMT3 = 2;
function upgradePIt3() {
    if (bpit3C <= clicks) {
        clicks = clicks - bpit3C;
        bpit3C = Math.round(bpit3C * PICMT3)
        if (PICMT3 >= 1.1) {
            PICMT3 -= 0.1;
        }
        passiveIncome += 7;
        lpit3.innerHTML = `<label class="lpit2"  for="">Buy PrivatBank stock: ${bpit3C}$</label>`;
        console.log(`PIt3 is ${bpit3C} now`);
        updateCounter();
        updatePICounter()
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

function updatePICounter() {
    piCounter.innerHTML = `<p class="passive-income">Passive income: ${passiveIncome}$</p>`
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



