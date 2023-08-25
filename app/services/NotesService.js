import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { saveState } from "../utils/Store.js";


function _saveNotes() {
  saveState('notes', AppState.notes)
}

class NotesService {

  setActive(noteId) {
    let foundNote = AppState.notes.find(n => n.id == noteId)
    AppState.activeNote = foundNote
  }

  saveNote(updatedBody) {
    let active = AppState.activeNote
    active.body = updatedBody
    _saveNotes()
  }

  deleteNote(noteId) {
    let foundNote = AppState.notes.find(n => n.id == noteId)
    let filteredNoteArr = AppState.notes.filter(n => n.id != noteId)
    AppState.notes = filteredNoteArr
    _saveNotes()
  }


  createNote(formData) {
    let newNote = new Note(formData)
    AppState.notes.push(newNote)
    console.log(AppState.notes)
    AppState.emit('notes')
    _saveNotes()
  }

}

export const notesService = new NotesService