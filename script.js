let myLibrary = [];
let book1 = new book('Moby Dick', 'Some Guy', '1934', 'Horror');
let book2 = new book('Big Boy Ben', 'Tiwon Michaels', '1934', 'Funny');
let book3 = new book('Crystal Cove', 'John Cry', '1934', 'Adventure');
let book4 = new book('Diaries of Manhattan', 'Mike Hawk', '1934', 'Drama');
let book5 = new book('Guns', 'Jack Johnson', '1934', 'Action');
document.getElementById('form').addEventListener('submit',addBook);
document.getElementById("form").style.display="none";
document.getElementById("add").addEventListener('click', toggleHide)
function book(title,author,year,genre)
{
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.read = 'false';
    myLibrary.push(this);
    displayBook(this);
}

function addBook(e)
{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;
    let newBook = new book(title,author,year,genre);
}

function displayBook(book)
{   
    const library = document.getElementById('library')
    const div = document.createElement('div');
    const title = document.createElement("h4");
    const author = document.createElement("p");
    const year = document.createElement("p");
    const genre = document.createElement("p");
    const remove = document.createElement("button");
    const read = document.createElement("button");

    book.innerHTML = '';
    title.innerHTML = book.title;
    author.innerHTML = book.author;
    year.innerHTML = book.year;
    genre.innerHTML = book.genre;
    remove.innerHTML = 'Remove';
    remove.classList.add('remove');
    remove.addEventListener('click', removeBook);
    read.innerHTML = 'Read';
    read.bool = book.read;
    read.addEventListener('click', toggleRead);

    library.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(year);
    div.appendChild(genre);
    div.appendChild(remove);
    div.appendChild(read);
}

function removeBook()
{
    this.parentElement.remove();
}

function toggleRead()
{
    if(this.bool === 'false')
    {
        this.bool = 'true';
        this.classList.add('read')
        console.log(this.bool);
    }
    else
    {
        this.bool = 'false';
        this.classList.remove('read')
        console.log(this.bool);
    }
}

function toggleHide()
{
    const form = document.getElementById("form")
    if(form.style.display === 'none')
    {
        form.style.display="block";
        document.getElementById('add').innerHTML = 'Hide';

    }
    else
    {
        form.style.display="none";
        document.getElementById('add').innerHTML = 'Add a Book';
    }
}