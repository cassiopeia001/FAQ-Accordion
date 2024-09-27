const questions= document.querySelectorAll(".question-container p");

questions.forEach(question=> question.addEventListener('click', showAnswer));

function showAnswer(){
    
    const index= this.dataset.index;

    const answer= document.querySelector(`.answer-container[data-index="${index}"]`);
    const img= document.querySelector(`img[data-index="${index}"]`);
    

    if(answer.style.display=== 'none'){

        answer.style.display= 'block';
        img.src= 'assets/images/icon-minus.svg';

    }
    else {

        answer.style.display= 'none';
        img.src= 'assets/images/icon-plus.svg';
    }
}


