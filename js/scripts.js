
const playButton = document.getElementById ('play-button');
console.log ('playButton', playButton, typeof playButton);

const selectDifficult = document.getElementById ('difficult');
console.log ('selectDifficult', selectDifficult, typeof selectDifficult);

playButton.addEventListener('click', function(){
   let gridContainer = document.querySelector ('.container-main');
    gridContainer.innerHTML = '';

    for(let i = 1; i <= 100; i++){
        const cell = document.createElement ('div');
        cell.innerHTML = i;
        cell.classList.add ('cell');
        cell.addEventListener ('click', function(){
            console.log ('this', this, typeof this);

            cell.classList.add ('active');
            console.log ();
        })
        gridContainer.append (cell);
    }
});  
                             