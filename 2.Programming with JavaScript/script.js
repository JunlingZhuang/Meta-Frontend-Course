
// const target = document.querySelector('body');

// function handleEvent() {
//   console.log('The button was clicked');
// }

// target.addEventListener('click', handleEvent );


function handleClick2(){
  console.log('The H1 was clicked');
}

window.handleClick2 = handleClick2;
function handleClick() {
  switch(h1.innerText){
      case arr[0]:
        h1.innerText = arr[1];
        break;
      case arr[1]:
        h1.innerTest = arr[2];
        break;
      case arr[2]:
        h1.innerText = arr[3];
      default:
        h1.innerText = arr[0];
  }
}