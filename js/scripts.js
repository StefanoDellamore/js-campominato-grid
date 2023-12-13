
const playButton = document.querySelector ('button');

let gameClick = false;
playButton.addEventListener('click', function(){
    if (gameClick == true) {
        document.querySelector ('box').innerHTML = '';
    }
    
    for(let i = 1; i <= 100; i++){

        let cell = document.createElement('div');
        cell.innerHTML = i;
        document.querySelector('.box').append(cell);

        cell.addEventListener('click', function(){
            this.classList.toggle('active');

            console.log(this.innerHTML);
        }
        );

    }
});  
