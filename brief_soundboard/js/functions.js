 function soundBoard(){
    document.addEventListener('keydown', function(e){
        let key = e.keyCode;
        const audio = document.querySelector(`audio[data-key="${key}"]`);// autre écriture ("audio[data-key="+key+"]")
        const btn_container = document.getElementById(key); // ça récupère la valeur du button, car il a l'id retournant la chiffre de qhaque touche
        if (!audio) {
          return
        } // pour stoper la fonction en cas de valeur nulle. 
        audio.currentTime= 0;
        audio.play();
        btn_container.classList.add('sound-active');
    
        audio.addEventListener('ended', function(){
            btn_container.classList.remove('sound-active');
        })
        
    })
}

function soundBoardMobile(){
    document.addEventListener('click', function(e){ //comme le click n'a pas besoin des même const du clavier, donc avec le getAttribute pour récupérer les Id des buttons 
        let id = e.target.getAttribute('id');
        const audio = document.querySelector(`audio[data-key="${id}"]`);// autre écriture ("audio[data-key="+id+"]")
       
        if (!audio) {
          return
        } // pour stoper la fonction en cas de valeur nulle. 
        audio.currentTime= 0;
        audio.play();
       e.target.classList.add('sound-active');
    
        audio.addEventListener('ended', function(){
            e.target.classList.remove('sound-active');
        }) 
    })
}

export function all(){
    soundBoard();
    soundBoardMobile(); 
}







