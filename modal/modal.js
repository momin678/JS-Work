var open = document.getElementById('modalOpen');
var close = document.getElementById('modalClose');
var modal = document.getElementById('modal');
open.addEventListener('click', function(){
    modal.classList.add("show");
});
close.addEventListener('click', function(){
    modal.classList.remove("show");
});