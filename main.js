let one=document.querySelector('#one')
let two=document.querySelector('#two')
let three=document.querySelector('#three')
let four=document.querySelector('#four')
let five=document.querySelector('#five')
let six=document.querySelector('#six')
let seven=document.querySelector('#seven')
let eight=document.querySelector('#eight')
let nine=document.querySelector('#nine')
let buttons=document.querySelectorAll('button')
let tb=document.querySelector('#tb')
let winnerMessage=document.querySelector('#winner')



function player(name,marker,playercell){
    this.name=name;
    this.marker=marker;
    this.playercell=playercell
}


let playerOne= new player('player one', 'X',[])

let playerTwo= new player('player two','O',[])

function turn(){
  buttons.forEach(function(button){
    button.addEventListener('click', handleClick, {once:true})
  })
}


tb.addEventListener('click', ()=>{
  tb.innerText=cplayer.marker
})


let cplayer=playerOne;


    buttons.forEach(function (button){
    button.addEventListener('click', function(){
        
     if(cplayer===playerOne){
      button.setAttribute('class', 'playerone')
      button.innerText=cplayer.marker
      cplayer=playerTwo;
      checkwinner()
      //continue this shit when you come back
      
      
     }
     else if(cplayer===playerTwo){
      button.setAttribute('class', 'playertwo')
      button.innerText=cplayer.marker
      cplayer=playerOne;
      checkwinner()
     }
     
    })
})



 function checkwinner(){ 

  //rows
  if(one.classList.contains('playerone') && two.classList.contains('playerone') && three.classList.contains('playerone') || 
   four.classList.contains('playerone') && five.classList.contains('playerone') && six.classList.contains('playerone') ||
   seven.classList.contains('playerone') && eight.classList.contains('playerone') && nine.classList.contains('playerone')){
     winnerMessage.innerText='player one won';
  }
  if(one.classList.contains('playertwo') && two.classList.contains('playertwo') && three.classList.contains('playertwo') || 
  four.classList.contains('playertwo') && five.classList.contains('playertwo') && six.classList.contains('playertwo') ||
  seven.classList.contains('playertwo') && eight.classList.contains('playertwo') && nine.classList.contains('playertwo')){
    winnerMessage.innerText='player two won';
 }

//collums

 if(one.classList.contains('playerone') && four.classList.contains('playerone') && seven.classList.contains('playerone') || 
 two.classList.contains('playerone') && five.classList.contains('playerone') && eight.classList.contains('playerone') ||
 three.classList.contains('playerone') && six.classList.contains('playerone') && nine.classList.contains('playerone')){
    winnerMessage.innerText='player one won';
}

if(one.classList.contains('playertwo') && four.classList.contains('playertwo') && seven.classList.contains('playertwo') || 
two.classList.contains('playertwo') && five.classList.contains('playertwo') && eight.classList.contains('playertwo') ||
three.classList.contains('playertwo') && six.classList.contains('playertwo') && nine.classList.contains('playertwo')){
  winnerMessage.innerText='player two won';
}


// else

if(one.classList.contains('playerone') && five.classList.contains('playerone') && nine.classList.contains('playerone') || 
three.classList.contains('playerone') && five.classList.contains('playerone') && seven.classList.contains('playerone')){
  winnerMessage.innerText='player one won';
}


if(one.classList.contains('playertwo') && five.classList.contains('playertwo') && nine.classList.contains('playertwo') || 
three.classList.contains('playertwo') && five.classList.contains('playertwo') && seven.classList.contains('playertwo')){
  winnerMessage.innerText='player two won';
}


  
}







