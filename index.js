// Book Class represents a Book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class handles UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Java Crash Course',
                author: 'Plexa Winnie',
                isbn: '11111'
            },
            {
                title: 'Python Crash Course',
                author: 'Atim Winnie',
                isbn: '11112'   
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm 
        delete">x</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = 'alert alert-${className}';

    }
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// store Class Handles Storage

// Event displays Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event to Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => 
{
    // Prevent action submit
    e.preventDefault();
    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //validation
    if(title === '' || author === '' || isbn === ''){
        alert('Please fill in all fields');
    } else {
        // Instatiate book
        const book = new Book(title, author, isbn);

        // Add Book to UI
        UI.addBookToList(book);

        //Clear fields
        UI.clearFields();
    }
});
// Event to remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
    
});