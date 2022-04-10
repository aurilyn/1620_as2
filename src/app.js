const openText = document.querySelector('.icons')

const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
function removeText(){
  const revert = document.querySelector('.write-note-area')
  revert.innerHTML = ''
  revert.insertAdjacentHTML('afterbegin', '')
}

function newNote(noteBody){
  const template = `
    <textarea id = 'noteArea' rows="40" cols="80">Note</textarea>
    <button class="Save">Save</button>
    <button class="Delete">Delete</button>
  `
  return template
}

function addtoNav(){
  const whatever = document.querySelector(".side-note-menu")
  whatever.innerHTML = ''
  whatever.insertAdjacentHTML('afterbegin', getTitle)
}

function displayNote(note) {
  const noteDisplayArea = document.querySelector('.write-note-area')
  noteDisplayArea.innerHTML = ''
  noteDisplayArea.insertAdjacentHTML('afterbegin', note)
}
function getNote (){
  const textArea = document.querySelector('.icons')
  const note = textArea.value
  return note
}

function putNote (){
  const noteText = getNote()
  const note = newNote(noteText)
  displayNote(note)
  savBtn = document.querySelector('.Save')
  delBtn = document.querySelector('.Delete')
  savBtn.addEventListener('click', savedNote)
  delBtn.addEventListener('click', removeText)
}

function addtoArray(){
  notes.push({
    title: getTitle(),
    noteBody: checkNote(),
    id: notes.length + 1
  }) 
}

function addtitletoNotes(){
  const selectNav = document.querySelector('.notes-list')
  selectNav.innerHTML = ''
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(getTitle()))
  selectNav.appendChild(li)
}
function savedNote(){
  addtitletoNotes()
  addtoArray()
  delNote()
}

function checkNote(){
  const text = document.getElementById("noteArea")
  const noteBody = text.value
  return noteBody
}

function getTitle(){
  const savedNote = getNote()
  const tempNote = savedNote.split("\n")
  const title = tempNote[0]
  return title
}

function initPage(){
  notes.map(item => item.title)
  const selectNav = document.querySelector('.notes-list')
  selectNav.innerHTML = ''
  selectNav.insertAdjacentHTML('beforebegin', item.title[0]) 
}

function initRead(){
  const template =`
  <button class="close">Close</button>
  <textarea readonly class = 'noteArea' rows="40" cols="80">Note</textarea>
  `
  const readArea = document.querySelector('.read-note-area')
  readArea.innerHTML = ''
  readArea.insertAdjacentHTML('beforeend', template)
}

openText.addEventListener('click', putNote)
notes.map(item => item.title)