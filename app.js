// let huvisagch zaraldag neg turul
// let eer zarlagdsan huvisagchiig ahij zarlah bolomjgui.

let btnRef= document.querySelectorAll('.button-option');
let popupRef= document.querySelector('.popup');
let newGameRef= document.getElementById('new-game')
let restartRef= document.getElementById('restart')
let msgRef= document.getElementById('messege')

// hojih magadlal
let winningPatern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

// x toglogchiig ehleh ued
// forEach massive dotorh element burt tuhain uildeliig hiideg
let xTurn = true;
let count =0;

const disableButtons = () =>{
    btnRef.forEach((Element) => (Element.disabled = true));

    popupRef.classList.remove('hide');
}

const enableButtons = () => {
    btnRef.forEach((Element) => {
        Element.innerHTML = '';
        Element.disabled = false;
    });

    popupRef.classList.add('hide');
}

const winFunction = (letter) =>{
    disableButtons();
    if(letter == 'X'){
        msgRef.innerHTML = 'X wins'
    }else{
        msgRef.innerHTML = 'O wins'
    }
}

const drawFunction = ()=>{
    disableButtons();
    msgRef.innerHTML = 'draww!!!';
}

newGameRef.addEventListener('click', ()=>{
    count = 0;
    enableButtons();
})

restartRef.addEventListener('click', ()=>{
    count = 0;
    enableButtons();
})
// delgetsend x bolon o g ilgeeh

btnRef.forEach((Element) =>{
    Element.addEventListener('click', ()=>{
        if(xTurn){
            xTurn = false;
            Element.innerHTML = 'X';
            Element.disabled = true;
        }else{
            xTurn = true;
            Element.innerHTML = 'O';
            Element.disabled = true;
        }

        count +=1;
        if(count==9){
            drawFunction()
        }
        winChecker();
    });
});

// hojson toglogchiig shalgah

const winChecker =()=>{
    for(let i of winningPatern ){
        let [Element1, Element2, Element3] = [
            btnRef[i[0]].innerHTML,
            btnRef[i[1]].innerHTML,
            btnRef[i[2]].innerHTML
        ];
        if(Element1 !='' && (Element2 !='' && Element3!='')){
            if(Element1 == Element2 && Element2 == Element3){
                winFunction(Element1);
            }
        }
    }
}   

var a = document.getElementById('restart').innerHTML

window.onload = enableButtons; 
