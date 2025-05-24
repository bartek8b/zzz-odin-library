const addBookBtn = document.querySelector("#addBookBtn");
const modal = document.querySelector("dialog");
const cancelBtn = document.querySelector("#cancelBtn");
const submitBtn = document.querySelector("#submitBtn");
const main = document.querySelector("main");
// const toggleBtns = document.querySelectorAll(".toggleBtn");
// const deleteBtn = document.querySelectorAll(".deleteBtn");

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
        <span class="bookIcon">&#128366;</span>
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
    alert("All fields needt to be filled");
  }
});

window.onload = addBookToLibrary("Szyuka wojny", "Sun tzu", 125, "No &#10008;");