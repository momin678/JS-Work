// let files = [],
//     button = document.querySelector('.top button'),
//     form = document.querySelector('form'),
//     container = document.querySelector('.container'),
//     inner = document.querySelector('.inner'),
//     browse = document.querySelector('.select'),
//     input = document.querySelector('form input');

//     browse.addEventListener('change', function(){
//         let file = input.files;
//         for(let i = 0; i<length.file; i++){
//             if(files.every(e => e.name !== file[i].name)){
//                 files.push(file[i]);
//             }
//         }
//         form.reset();
//         showImage();
//     });
//     const showImage = function(){
//         let images = '';
//         files.forEach(function(e, i){
//             images += `
//                         <div class="image">
//                             <img src=${URL.createObjectURL(e)}" alt="image">
//                             <span onclick="deleteImg(${i})>&times;</span>
//                         </div>
//                         `
//         });
//         container.innerHTML = images;
//     }
//     const deleteImg = index =>{
//         files.splice(index, 1);
//         showImage();
//     }
//     form.addEventListener('dragover', function(e){
//         e.preventDefault();
//         form.classList.add('dragover');
//         text.innerHTML = 'Drop image here';
//     });
//     form.addEventListener('dragleave', function(e){
//         e.preventDefault();
//         form.classList.remove('dragover');
//         text.innerHTML = `Drag & Drop Image Here or <span class="select">Browse</span>`;
//     });
//     form.addEventListener('drag', function(e){
//         e.preventDefault();
//         form.classList.remove('dragover');
//         text.innerHTML = `Drag & Drop Image Here or <span class="select">Browse</span>`;
//         let file = input.files;
//         for(let i = 0; i<length.file; i++){
//             if(files.every(e => e.name !== file[i].name)){
//                 files.push(file[i]);
//             }
//         }
//         showImage();
//     })

let files = [], // will be store images
button = document.querySelector('.top button'), // uupload button
form = document.querySelector('form'), // form ( drag area )
container = document.querySelector('.container'), // container in which image will be insert
text = document.querySelector('.inner'), // inner text of form
browse = document.querySelector('.select'), // text option fto run input
input = document.querySelector('form input'); // file input

browse.addEventListener('click', () => input.click());

// input change event
input.addEventListener('change', () => {
	let file = input.files;

	for (let i = 0; i < file.length; i++) {
		if (files.every(e => e.name !== file[i].name)) files.push(file[i])
	}

	form.reset();
	showImages();
})

const showImages = () => {
	let images = '';
	files.forEach((e, i) => {
		images += `<div class="image">
    			<img src="${URL.createObjectURL(e)}" alt="image">
    			<span onclick="delImage(${i})">&times;</span>
    		</div>`
	})

	container.innerHTML = images;
}

const delImage = index => {
	files.splice(index, 1)
	showImages()
} 

// drag and drop 
form.addEventListener('dragover', e => {
	e.preventDefault()

	form.classList.add('dragover')
	text.innerHTML = 'Drop images here'
})

form.addEventListener('dragleave', e => {
	e.preventDefault()

	form.classList.remove('dragover')
	text.innerHTML = 'Drag & drop image here or <span class="select">Browse</span>'
})

form.addEventListener('drop', e => {
	e.preventDefault()

    form.classList.remove('dragover')
	text.innerHTML = 'Drag & drop image here or <span class="select">Browse</span>'

	let file = e.dataTransfer.files;
	for (let i = 0; i < file.length; i++) {
		if (files.every(e => e.name !== file[i].name)) files.push(file[i])
	}

	showImages();
})
