

const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");

function shownotes(){
  notescontainer.innerHTML = localStorage.getItem("notes") || "";
  const notes = document.querySelectorAll(".input-box");


  notes.forEach(note => {
    if (!note.querySelector("img")) {
      let img = document.createElement("img");
      img.src = "images/delete.png";
      note.appendChild(img);
    }
  });
}
shownotes();

function updatestorage(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
    updatestorage();
});

notescontainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatestorage();
    } else if(e.target.tagName === "P") {
        let currentNote = e.target;
        currentNote.onkeyup = function(){
            updatestorage();
        }
    }
});
