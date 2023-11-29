const oavgjort = 'Det blev oavgjort';
const vann = 'Du vann rundan';
const forlorar = 'Du förlorar rundan';

const btn1 = document.querySelector('button');

const restartbutton = document.querySelector('.startaom');
restartbutton.addEventListener('click', restart);
btn1.addEventListener('click', addName);
const select = document.querySelectorAll('input[name="val"]');
console.log(select);
let valArr = ['Sten', 'Sax', 'Påse'];
let inputEl = document.querySelector('#fname');
inputEl.addEventListener('keypress', enter);

function enter (event){
    if (event.key === 'Enter'){
        event.preventDefault();
        btn1.click();
    }


}



for(let i = 0; i < select.length; i++){
    let sel = select[i]
    sel.addEventListener('click', selectFunction );

}


function selectFunction (event){
    event.target.style.color = 'yellow';
    let arrRandom = Math.floor(Math.random()*3);
    valArr[arrRandom];
    const datornDisplay = document.querySelector('.datornRandom');
    datornDisplay.innerText = valArr[arrRandom];
    const mittRandom = document.querySelector('.MittVal');
    mittRandom.innerText = valArr[event.target.value];
    const poangtext = document.querySelector('.något')
    poangtext.innerText = scoring(valArr[event.target.value], valArr[arrRandom]);
    poangSatt(poangtext.innerText)
}


function poangSatt (vemVann) {
    if (vemVann == vann){
        const duvann = document.querySelector('.poängDu');
        duvann.innerText = Number(duvann.innerText)+1;
        if (duvann.innerText == 3){
            endgame('Grattis du är vinnaren!');

        }

    }

    if (vemVann == forlorar){
        const datornVann = document.querySelector('.poängDator');
        datornVann.innerText = Number(datornVann.innerText)+1;
        if (datornVann.innerText == 3){
            endgame('Tyvär du förlora!');

        }
    }


}
function endgame (vemVann){ 
    const popUp = document.querySelector('.popupText')
    popUp.innerText = vemVann
    const endgame = document.querySelector('.game');
    endgame.style.display = 'none';
    const popUpend = document.querySelector('.popup');
    popUpend.style.display = 'block';


}
function scoring (mittval, datornval){

    if (mittval == 'Sten'){
        if(datornval == 'Sten'){
            return oavgjort;  
        }
        if(datornval == 'Sax'){ 
            return vann;

        }
        if(datornval == 'Påse'){
            return forlorar;
        }
    }


    if (mittval == 'Sax'){
        if(datornval == 'Sten'){
            return forlorar;  
        }
        if(datornval == 'Sax'){ 
            return oavgjort;

        }
        if(datornval == 'Påse'){
            return vann;
        }
    }

    if (mittval == 'Påse'){
        if(datornval == 'Sten'){
            return vann;  
        }
        if(datornval == 'Sax'){ 
            return forlorar;

        }
        if(datornval == 'Påse'){
            return oavgjort;
        }
    }

}


function restart () {
    const namnsumbit = document.querySelector('h2');
    namnsumbit.innerText = 'Namn';
    const poang0Mitt = document.querySelector('.poängDu');
    poang0Mitt.innerText = 0;
    const poang0Datorn = document.querySelector('.poängDator');
    poang0Datorn.innerText = 0;
    const whoWonText = document.querySelector('.något');
    whoWonText.innerText = '.';
    const popUpRestart = document.querySelector('.popupText');
    popUpRestart.innerText = '';
    const intro = document.querySelector('.intro');
    intro.style.display = 'block';
    const popUpend = document.querySelector('.popup');
    popUpend.style.display = 'none';


}

function addName(event){
    const playerName = document.querySelector('h2');
    const subName = document.querySelector('#fname').value;
    playerName.innerText = subName;
    const endgame = document.querySelector('.game');
    endgame.style.display = 'block';
    const intro = document.querySelector('.intro');
    intro.style.display = 'none';
    
}

