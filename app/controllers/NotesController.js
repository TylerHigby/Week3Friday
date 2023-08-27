import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { notesService } from "../services/NotesService.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

getFormData

function _drawNotes() {
  // console.log('drawing notes')
  let notes = AppState.notes
  let content = ''
  notes.forEach(n => content += n.ListTemplate)
  setHTML('note-list', content)
}

function _drawActive() {
  let active = AppState.activeNote
  setHTML('active-note', active.activeTemplate)
}

export class NotesController {
  constructor() {
    // console.log('hello')
    _drawNotes()
    AppState.on('activeNote', _drawActive)
    AppState.on('notes', _drawNotes)
  }
  setActive(noteId) {
    notesService.setActive(noteId)
  }

  saveNote() {
    // let textAreaElem = document.querySelector('textAreaElem')
    const form = window.event.target
    const formData = getFormData(form)
    console.log(formData)
    // console.log(textAreaElem)
    //let updatedBody = textAreaElem.value
    notesService.saveNote(formData)

  }

  createNote() {
    window.event.preventDefault()
    const form = window.event.target
    const formData = getFormData(form)
    notesService.createNote(formData)
  }

  async deleteNote(noteId) {
    if (await Pop.confirm("Are you sure you want to delete this note?")) {
      console.log('deleting', noteId)
      notesService.deleteNote(noteId)
    }
  }

}