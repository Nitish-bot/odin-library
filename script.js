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

    addBook("GRR", "TKOR", "176", "read");
    addBook("GRs", "KOR", "276", "unread");

    console.log(lib);

    const dialog = document.getElementById('dialog'); 
    function openForm() {
        dialog.showModal();
    }
    
    function closeForm() {
        dialog.close();
    }
    
    // Attach event listeners for open and close
    document.getElementById('add').addEventListener('click', (event) => {
        event.preventDefault();
        openForm();

        document.getElementById('cancelAdd').addEventListener('click', (event) => {
            event.preventDefault();
            closeForm();
        });

        const readStat = document.getElementById('freadStatus');
        const added = document.getElementById('added');

        readStat.addEventListener('click', (event) => {
            event.preventDefault();
            if (readStat.className === 'read') {
                    readStat.className = 'unread';
                    readStat.innerText = 'Unread';
            } else {
                readStat.className = 'read';
                readStat.innerText = 'Read';
            }
        });

        added.addEventListener('click', (event) => {
            event.preventDefault();

            const fAuthor = document.getElementById('fauthor').value;
            const fTitle = document.getElementById('ftitle').value;
            const fPages = document.getElementById('fcount').value;
            const fReadStat = document.getElementById('freadStatus').class;
        });
    });
});