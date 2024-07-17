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

    const dialog = document.getElementById('dialog'); 
    
    function openForm() {
        dialog.showModal();
    }
    
    function closeForm() {
        dialog.close();
    }
    
    // Attach event listeners for open and close
    document.getElementById('add').addEventListener('click', (event) => {
        event.preventDefault;
        openForm();
    });
    document.getElementById('cancelAdd').addEventListener('click', (event) => {
        event.preventDefault;
        closeForm();
    });
});