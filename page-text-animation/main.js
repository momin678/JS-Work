window.addEventListener('scroll', function(){
    var container_one = this.document.getElementById('containerOne');
    var container_one_position = container_one.getBoundingClientRect().top;
    var scrollY = window.scrollY;
    if(container_one_position>scrollY){
        container_one.classList.add('container-active');
    }else{
        container_one.classList.remove('container-active');
    }
})