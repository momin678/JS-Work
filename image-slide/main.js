var images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg',];
var index = 0;
var slideImg = document.getElementById('slideImg');
setInterval(imageSlide, 1000);
function imageSlide(e){
    index++;
    if(index >= images.length){
        index = 0;
        slideImg.src = 'img/'+images[index];
    }else{
        slideImg.src = 'img/'+images[index];
    }
}