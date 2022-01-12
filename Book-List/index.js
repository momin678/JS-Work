/**
 * 1.  DOM Selection
 * 2. Event Listner
 * 3. Back Validation
 * 4. Creating Element
 * 5. Append
 * 
 */

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');
var id = 1;

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(title.value == "" && author.value == "" && year.value == ""){
        alert('Bhai akta kichu den');
    }else{
        // create new row
        const newRow = document.createElement('tr');

        const newId = document.createElement('th');
        newId.innerHTML = id;
        newRow.appendChild(newId);
        id += 1;

        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        // append in tbody
        bookList.appendChild(newRow);

    }
});