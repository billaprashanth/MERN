let startMagic = document.getElementById('startMagic');
let stopMagic = document.getElementById('stopMagic');
let MagicStatus = false;
function CheckMagicStatus(){
    if(MagicStatus == true){
        startMagic.style.display = 'none';
        stopMagic.style.display = 'block';
    }
    else{
        startMagic.style.display = 'block';
        stopMagic.style.display = 'none';
    }
}
function Magic(){
    MagicStatus = true;
    let title = document.getElementById('title');
    title.classList.add('magic');  // adding the class
    CheckMagicStatus();
}
function StopMagic(){
    MagicStatus = false;
    let title = document.getElementById('title');
    title.classList.remove('magic');
    CheckMagicStatus();
}