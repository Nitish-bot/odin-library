document.addEventListener("DOMContentLoaded", () => {
    
    const lib = [];

    function book(author, title, pageCount, readStatus) {
        this.author = author,
        this.title = title,
        this.pageCount = pageCount,
        this.readStatus = readStatus
    }
    
    function addBook(author, title, pageCount, readStatus) {
        let newBook = new book(author, title, pageCount, readStatus);
        lib.push(newBook);
    }

    const button = document.getElementById('add');
    button.addEventListener('submit', {
        
    });
});