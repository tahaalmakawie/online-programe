let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let relod = document.querySelector('.relod');
let  taha = document.querySelector('ali');




//online

function online(){
    title.innerHTML='Online Now <h5>hello with taha</h5>';
    
    title.style.color='green';
    ul.classList.add('hide')
    relod.classList.add('hide')

}
//ofline
function ofline(){
    title.innerHTML='Ofline Now';
    title.style.color = '#666';
    relod.classList.remove('hide');
    ul.classList.remove('hide');
}

//if online
window.onload= function(){
    if(window.navigator.onLine){
        online()

    }else{
        ofline()

    }    
}
window.addEventListener('online', function(){
    online()
});

window.addEventListener('ofline', function(){
    ofline()
});

relod.onclick = function(){
    window.location.reload()
}

// if ofline
// window.onload = function(){
//     if(window.navigator.online){
//         ofline()
//     }
// }