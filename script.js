document.addEventListener("DOMContentLoaded", () => {
    
    // Constructor lib and add function declarations
    const lib = [];

    function createBook(author, title, pageCount, readStatus) {
        this.author = author,
        this.title = title,
        this.pageCount = pageCount,
        this.readStatus = readStatus
    }
    
    function addBook(author, title, pageCount, readStatus) {
        let newBook = new createBook(author, title, pageCount, readStatus);
        lib.push(newBook);
    }

    // Declare function for reading from the lib and display
    function display(book) {
        const cardHolder = document.getElementById('cardHolder')
        const card = document.createElement('p');
        card.className = 'card';

        const name = document.createElement('p');
        name.className = 'name';
        name.innerHTML = `Title: ${book.title}`;

        const author = document.createElement('p');
        author.className = 'author';
        author.innerHTML = `Author: ${book.author}`;

        const pageCount = document.createElement('p');
        pageCount.className = 'pageCount';
        pageCount.innerHTML = `${book.pageCount} pages`;

        const readStat = document.createElement('button');
        readStat.className = `readStatus ${book.readStatus}`;
        readStat.innerHTML = book.readStatus === 'read' ? 'Read' : 'Unread';

        const remove = document.createElement('button');
        remove.className = 'removeBook';
        remove.innerHTML = `Remove`;

        card.appendChild(name);
        card.appendChild(author);
        card.appendChild(pageCount);
        card.appendChild(readStat);
        card.appendChild(remove);

        cardHolder.appendChild(card);
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
        event.preventDefault();
        openForm();

        document.getElementById('cancelAdd').addEventListener('click', (event) => {
            event.preventDefault();
            closeForm();
        });


        // Handle read status toggle and add Book
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
            const fReadStat = document.getElementById('freadStatus').className;

            if (isNaN(fPages) || fAuthor === "" || fTitle === "" ||
                fPages === "") {
                alert('Please fill the details in the correct format!');
            }
            else {
                addBook(fAuthor, fTitle, fPages, fReadStat);
                lib.forEach(display);
            }
        });
    });
});