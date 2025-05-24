const addBookBtn = document.querySelector("#addBookBtn");
const modal = document.querySelector("dialog");
const cancelBtn = document.querySelector("#cancelBtn");
const submitBtn = document.querySelector("#submitBtn");

const myLibrary = [];

function Book(title, author, pages, read, id){
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
}


// EVENT LISTENERS

addBookBtn.addEventListener("click", () => {
    modal.showModal();
});

cancelBtn.addEventListener("click", () => {
    modal.close();
})

submitBtn.addEventListener("click", () => {
    
})

// addBookToLibrary("fsdfsdf", "author", "pages", "read");
// console.log(myLibrary);