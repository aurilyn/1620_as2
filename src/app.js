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
  const li = document.createElement("li")
  li.className = 'newNote'
  li.appendChild(document.createTextNode(getTitle()))
  selectNav.appendChild(li)
}

function addToNotes(){
  const textSplit = getNote().split('\n')
  const index = 0
  var noteShow = ""
  if (index > -1){
    textSplit.splice(index, 1);
  }
  for (const x of textSplit){
    noteShow += x;
    noteShow += "\n";
  }
  notes.push({
    title: getTitle(),
    noteBody: noteShow,
    id: notes.length + 1
  }) 
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

function removeRead(){
  const readArea = document.querySelector('.read-note-area')
  readArea.innerHTML = ''
  readArea.insertAdjacentHTML('afterbegin', '')
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

function displayRead(id){
  initRead()
  removeText()
  const cancelBtn = document.querySelector('.close')
  cancelBtn.addEventListener('click', removeRead)
  var displayedNote = ''
  for (i of notes){
    if (id == i.title){
      displayedNote = i.title + '\n' + i.noteBody
    }
  }
  const noteArea = document.querySelector('.noteArea')
  noteArea.innerHTML = displayedNote
}

function lastNoteButton() {
  const noteList = document.querySelector('.notes-list').lastChild
  noteList.addEventListener('click', (evt) => {
    const lastNoteTitle = evt.target.innerHTML
    displayReadOnly(lastNoteTitle)
  })
}

openText.addEventListener('click', putNote)