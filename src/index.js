
console.log('12312')
const $h1 = document.querySelector('h1');

$h1.ondrop=function(event){
  event.preventDefault();
  $h1.innerText=event.dataTransfer.files[0].path;
}
