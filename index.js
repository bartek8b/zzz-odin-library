const addBookBtn = document.querySelector("#addBookBtn");
const modal = document.querySelector("dialog");
const cancelBtn = document.querySelector("#cancelBtn");
const submitBtn = document.querySelector("#submitBtn");
const main = document.querySelector("main");

const myLibrary = [];

function Book(title, author, pages, read, id) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary(title, author, pages, read) {
  const id = self.crypto.randomUUID();
  const book = new Book(title, author, pages, read, id);
  myLibrary.push(book);
  displayLibrary();
}

function displayLibrary() {
  main.innerHTML = "";
  myLibrary.forEach((book) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="bookIcon" fill="currentColor"><path d="M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M11 7.5C9.64 6.9 7.84 6.5 6.5 6.5C5.3 6.5 4.1 6.65 3 7V18.5C4.1 18.15 5.3 18 6.5 18C7.84 18 9.64 18.4 11 19V7.5M13 19C14.36 18.4 16.16 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C16.16 6.5 14.36 6.9 13 7.5V19Z" /></svg>
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read}</p>
        <section>
          <button class="cardButton toggleBtn" data-id="${book.id}">Toggle</button><button class="cardButton deleteBtn" data-id="${book.id}">Delete</button>
        </section>
    `;
    main.appendChild(newDiv);
  });
  const toggleBtns = document.querySelectorAll(".toggleBtn");
  const deleteBtns = document.querySelectorAll(".deleteBtn");
  
  toggleBtns.forEach((button) =>
    button.addEventListener("click", () => {
      const dataId = button.getAttribute("data-id");
      for (const book of myLibrary) {
        if (dataId === book.id) {
          book.read === "No &#10008;"
            ? (book.read = "Yes &#10004;")
            : (book.read = "No &#10008;");
          displayLibrary();
        }
      }
    })
  );

  deleteBtns.forEach((button) =>
    button.addEventListener("click", () => {
      const dataId = button.getAttribute("data-id");
      const index = myLibrary.findIndex(book => book.id === dataId);
      for (const book of myLibrary) {
        if (dataId === book.id) {
          myLibrary.splice(index, 1);
          displayLibrary();
        }
      }
    })
  );
}

// EVENT LISTENERS
let title = document.querySelector('input[name="title"]');
let author = document.querySelector('input[name="author"]');
let pages = document.querySelector('input[name="pages"]');

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  document.querySelector('input[name="read"][value="no"]').checked = true;
}

addBookBtn.addEventListener("click", () => {
  modal.showModal();
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearForm();
  modal.close();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (title.value && author.value && pages.value) {
    let read = document.querySelector('input[name="read"][value="no"]').checked
      ? "No &#10008;"
      : "Yes &#10004;";

    addBookToLibrary(title.value, author.value, pages.value, read);

    clearForm();
    modal.close();
  } else {
    alert("All fields need to be filled");
  }
});

addBookToLibrary("The Art of War", "Sun Tzu", 125, "No &#10008;");
addBookToLibrary("The Godfather", "Mario Puzo", 350, "Yes &#10004;");
addBookToLibrary("Lord of the Rings", "J.R.R. Tolkien", 900, "Yes &#10004;");
addBookToLibrary("All Quiet on the Western Front", "E.M. Remarque", 200, "Yes &#10004;");
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 430, "No &#10008;");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 280, "No &#10008;");
