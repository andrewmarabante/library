let myLibrary = [];
let book1 = new book('Moby Dick', 'Some Guy', '1934', 'Horror');
let book2 = new book('Big Boy Ben', 'Tiwon Michaels', '1934', 'Funny');
let book3 = new book('Crystal Cove', 'John Cry', '1934', 'Adventure');
let book4 = new book('Diaries of Manhattan', 'Mike Hawk', '1934', 'Drama');
let book5 = new book('Guns', 'Jack Johnson', '1934', 'Action');


function book(title,author,year,genre)
{
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    myLibrary.push(this);
}

function checkBook(e)
{
    console.log(myLibrary[2]);
}
document.getElementById('start').addEventListener('click', checkBook);

