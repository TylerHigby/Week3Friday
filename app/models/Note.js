import { NotesController } from "../controllers/NotesController.js";
import { notesService } from "../services/NotesService.js";
import { generateId } from "../utils/generateId.js";


export class Note {

  constructor(data) {
    this.id = generateId()
    this.location = data.location
    this.title = data.title
    this.body = data.body
    this.color = data.color
    this.listingDate = new Date()
    this.updatedDate = new Date()
  }

  get ListTemplate() {
    return /*html*/ `<div  class="bg-light my-2 border border-primary">
  <div><span>${this.location}</span></div>
  <div><span style="color:${this.color}">Title: ${this.title}</span></div>
  <div><span>Body: ${this.body}</span></div>
  <div><span>List Date: ${this.listingDate.toLocaleDateString()}</span></div>
  <div><span>Updated Date: ${this.updatedDate.toUTCString()}</span></div>
  <button onclick="app.NotesController.setActive('${this.id}')" class="btn btn-info">edit</button>
  <button onclick="app.NotesController.deleteNote('${this.id}')" class="btn btn-danger" >delete<i class="mdi mdi-recycle"></i></button>
      </div>`
  }

  get activeTemplate() {
    return /*html*/ ` <div class="container-fluid border border-primary">
    <section class="row">

  
    <div >
  
    <form class="row p-2" onsubmit="app.NotesController.saveNote()">
  
    <div class="form-floating mb-3 col-4">
            <input required type="text" minLength="3" maxLength="15" class="form-control" id="noteTitle" name="title" placeholder="NoteTitle" value="${this.title}">
            <label for="noteTitle">Title</label>
    </div>

          <div class="form-floating mb-3">
            <textarea  required class="form-control" placeholder="Note Body" name="body" id="noteBody"
              style="height: 200px">${this.body}</textarea>
            <label for="noteBody">Body</label>
          </div>

          <div class="form-floating mb-3 col-2">
            <input  required type="color" class="form-control" id="noteColor" name="color" placeholder="noteColor" value = "${this.color}">
            <label for="noteColor">Color</label>
          </div>

  
          <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
          <div class="text-end">
            <button type="submit" class="btn btn-info">Create Note</button>
  
          </div>
        </form>
      </div>
    </section>
  
      <section class="row justify-content-center" id="cars">

  
      </section>
    
    
      </div>`
  }
}

