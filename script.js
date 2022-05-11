const body = document.querySelector('body')
const box = document.createElement('div')
box.id = 'box'
body.appendChild(box)


let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    if(keyName === 'ArrowDown') {
        boxTop += 10
    }
    else if (keyName === 'ArrowUp') {
        boxTop -= 10
    }
    else if(keyName === 'ArrowRight') {
        boxLeft += 10
    }
    else if(keyName === 'ArrowLeft') {
        boxLeft -= 10
    }
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
  });


  document.getElementById('box').style.backgroundImage = "url('face.png')"
  document.getElementById('box').style.width = '150px'
  document.getElementById('box').style.height = '200px'



