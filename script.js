document.addEventListener("DOMContentLoaded", () => {
    
    // Constructor lib and add function declarations
    const lib = [];

    class createBook extends parent {
        constructor(author, title, pageCount, readStatus) {
            this.author = author,
            this.title = title,
            this.pageCount = pageCount,
            this.readStatus = readStatus
        }
    }
    
    class parent {
        toggle() {
            this.readStatus = this.readStatus === 'read' ? 'unread' : 'read';
        }
    }

    function addBook(author, title, pageCount, readStatus) {
        let newBook = new createBook(author, title, pageCount, readStatus);
        lib.push(newBook);
    }
    
    // Function for clearing card holder
    function clear() {
        cardHolder.innerHTML = '';
    }

    // Declare function for reading from the lib and display
    const cardHolder = document.getElementById('cardHolder')

    function display(book) {
        const card = document.createElement('p');
        card.className = 'card';
        card.setAttribute('data-id', lib.indexOf(book));

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
        readStat.className = `${book.readStatus}`;
        readStat.id = `readStatus`;
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
    });
    
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
        event.stopPropagation();
        const fAuthor = document.getElementById('fauthor').value;
        const fTitle = document.getElementById('ftitle').value;
        const fPages = document.getElementById('fcount').value;
        const fReadStat = document.getElementById('freadStatus').className;
        const form = document.getElementById('addForm');

        if (isNaN(fPages) || fAuthor === "" || fTitle === "" ||
            fPages === "") {
            alert('Please fill the details in the correct format!');
            form.reset();
        }
        else {
            addBook(fAuthor, fTitle, fPages, fReadStat);
            form.reset();
            closeForm();
            clear();
            lib.forEach(display);
        }
    });

    // Event listener for remove and toggle
    cardHolder.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const btn = event.target;
        if (btn.className === 'read' || btn.className === 'unread') {
            lib[btn.parentNode.dataset.id].toggle();
            clear();
            lib.forEach(display);
        } else if (btn.className === 'removeBook') {
            lib.splice(btn.parentNode.dataset.id, 1);
            clear();
            lib.forEach(display);
        }
    });
});
