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

  saveNote(formData) {
    let active = AppState.activeNote
    let position = 0
    for (let i = 0; i < AppState.notes.length; i++) {
      if (AppState.notes[i].id == active.id) {
        position = i + 1
      }
    }
    console.log(AppState.notes[0].id)
    console.log(active.id)
    active.location = position
    active.body = formData.body
    active.title = formData.title
    active.color = formData.colorS
    console.log(active)

    _saveNotes()
  }



  deleteNote(noteId) {
    let foundNote = AppState.notes.find(n => n.id == noteId)
    let filteredNoteArr = AppState.notes.filter(n => n.id != noteId)
    AppState.notes = filteredNoteArr
    _saveNotes()
  }


  createNote(formData) {
    //console.log(formData)
    let location = AppState.notes.length + 1
    // console.log(length)
    formData.location = `${location}`
    // console.log(formData)
    let newNote = new Note(formData)
    AppState.notes.push(newNote)
    //console.log(AppState.notes)
    AppState.emit('notes')
    _saveNotes()
  }

}

export const notesService = new NotesService