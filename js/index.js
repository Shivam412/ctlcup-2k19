/*

UI Mockup of github.com/onfe/terminal
a terminal 'emulator' written in js.

for teaching shell concepts or giving examples
eg. how to install using npm
*/


setInterval(caretToggle, 500);

function caretToggle() {
  // var caret = document.getElementsByClassName("term-caret")[0];
  // if (caret.classList.contains('blink')) {
  //   caret.classList.remove('blink');
  // } else {
  //   caret.classList.add('blink');
  // }
}

var term_inp = document.getElementsByClassName('term-input-hide')[0]
var term_cmd = document.getElementsByClassName('term-cmd')[0];
term_inp.addEventListener("keyup", typeCommand);


function typeCommand(e) {
  var v = term_inp.value;
  term_cmd.innerHTML = v;
}

var term = document.getElementById('term');
term.addEventListener("click", term_inp.focus())