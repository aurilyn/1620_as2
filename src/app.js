const openText = document.querySelector('.icons')

var check = false

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

const template = `
    <textarea id = 'noteArea' rows="40" cols="80">Note</textarea>
    <button class="Save">Save</button>
    <button class="Delete">Delete</button>
  `
function addtoNav(){
  const whatever = document.querySelector(".side-note-menu")
  whatever.innerHTML = ''
  whatever.insertAdjacentHTML('afterbegin', getTitle)
}

function displayNote(note) {
  const noteDisplayArea = document.querySelector('.write-note-area')
  noteDisplayArea.innerHTML = ''
  noteDisplayArea.insertAdjacentHTML('beforeend', note)
}

function getNote (){
  const text = document.getElementById("noteArea")
  const noteBody = text.value
  return noteBody
}

function putNote (){
  removeRead()
  displayNote(template)
  savBtn = document.querySelector('.Save')
  delBtn = document.querySelector('.Delete')
  savBtn.addEventListener('click', savedNote)
  delBtn.addEventListener('click', removeText)
}


function addtitletoNotes(){
  const selectNav = document.querySelector('.notes-list')
  const li = document.createElement("li")
  li.className = 'newNote'
  li.appendChild(document.createTextNode(getTitle()))
  selectNav.appendChild(li)
}

function addtoArray(){
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
  removeText()
  lastNoteButton()
}

function getTitle(){
  const savedNote = getNote()
  const tempNote = savedNote.split("\n")
  const title = tempNote[0]
  return title
}

function initPage(){
  openText.addEventListener('click', putNote)
  createCheck()
  const noteList = document.querySelector('.notes-list')
  const li = document.createElement('li')
  li.className = 'newNote'
  li.appendChild(document.createTextNode(notes[0].title))
  const lastNote = noteList.appendChild(li).lastChild
  lastNote.addEventListener('click', (evt) => {
    const lastNoteTitle = evt.target.innerHTML
    displayReadOnly(lastNoteTitle)
  })
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
    displayRead(lastNoteTitle)
  })
}
function darkmode(){
  const dark = document.querySelector(".main-container")
  if (check == false){
    dark.classList.replace('light-theme', 'dark-theme')
    check = true
  } else if (check == true){
    dark.classList.replace('dark-theme', 'light-theme')
    check = false
  }
}
function createCheck(){
  var checkBox = document.querySelector('.theme-toggle')
  checkBox.addEventListener('click', darkmode)
}

openText.addEventListener('click', putNote)
initPage()