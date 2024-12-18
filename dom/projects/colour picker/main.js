const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    switch(e.target.id) {
      case 'grey':
        body.style.backgroundColor = '#ccc';
        break;
      case 'white':
        body.style.backgroundColor = '#fff';
        break;
      case 'blue':
        body.style.backgroundColor = '#add8e6';
        break;
      case 'yellow':
        body.style.backgroundColor = '#ffffcc';
        break;
      case 'purple':
        body.style.backgroundColor = '#d8b4e2';
        break;
    }
  });
});