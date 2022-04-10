const openText = document.querySelector('.icons')

var check = false

const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
const template = `
    <textarea id = 'noteArea' rows="40" cols="80">Note</textarea>
    <button class="Save">Save</button>
    <button class="Delete">Delete</button>
  `
function removeText(){
  openText.innerHTML = '<i class="fa-solid fa-circle-plus">'
  const revert = document.querySelector('.write-note-area')
  revert.innerHTML = ''
  revert.insertAdjacentHTML('afterbegin', '')
}
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
  openText.innerHTML = ''
  removeRead()
  displayNote(template)
  savBtn = document.querySelector('.Save')
  delBtn = document.querySelector('.Delete')
  savBtn.addEventListener('click', savedNote)
  delBtn.addEventListener('click', removeText)
}


function addtitletoLi(){
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
  for (const item of textSplit){
    noteShow += item;
    noteShow += "\n";
  }
  notes.push({
    title: getTitle(),
    noteBody: noteShow,
    id: notes.length + 1
  }) 
}

function savedNote(){
  addtitletoLi()
  addtoArray()
  removeText()
  clickableNote()
}

function getTitle(){
  const savedNote = getNote()
  const tempNote = savedNote.split("\n")[0]
  return tempNote
}
function displayFirstNote(){
  const noteList = document.querySelector('.notes-list')
  const li = document.createElement('li')
  li.className = 'newNote'
  li.appendChild(document.createTextNode(notes[0].title))
  noteList.appendChild(li)
  const firstNote = noteList.lastChild
  firstNote.addEventListener('click', (evt) => {
    const lastNoteTitle = evt.target.innerHTML
    displayRead(lastNoteTitle)
  })
}

function initPage(){
  openText.addEventListener('click', putNote)
  createCheck()
  displayFirstNote()
}
function removeRead(){
  const readArea = document.querySelector('.read-note-area')
  readArea.innerHTML = ''
  readArea.insertAdjacentHTML('afterbegin', '')
}

function initRead(){
  const template =`
  <textarea readonly class = 'noteArea' rows="40" cols="80">Note</textarea>
  <button class="close">x</button>
  `
  const readArea = document.querySelector('.read-note-area')
  readArea.innerHTML = ''
  readArea.insertAdjacentHTML('beforeend', template)
}

function displayRead(title){
  initRead()
  removeText()
  const cancelBtn = document.querySelector('.close')
  cancelBtn.addEventListener('click', removeRead)
  var displayedNote = ''
  for (i of notes){
    if (title == i.title){
      TitleNote = i.title + '\n' + i.noteBody
    }
  }
  const noteArea = document.querySelector('.noteArea')
  noteArea.innerHTML = TitleNote
}

function clickableNote() {
  const noteList = document.querySelector('.notes-list').lastChild
  noteList.addEventListener('click', (evt) => {
    const lastNoteTitle = evt.target.innerHTML
    displayRead(lastNoteTitle)
  })
}
function LDmode(){
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
  var clickBox = document.querySelector('.theme-toggle')
  clickBox.addEventListener('click', LDmode)
}

initPage()