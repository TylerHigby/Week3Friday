import { NotesController } from "../controllers/NotesController.js";
import { generateId } from "../utils/generateId.js";


export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body
    this.color = data.color
    this.listingDate = new Date()
  }

  get ListTemplate() {
    return /*html*/ `<div class="my-2 border border-primary" >
  
  <span>${this.title}</span><button onclick="app.NotesController.setActive('${this.id}')" class="btn btn-info">start</button>
  <span>${this.body}</span>
  <span>${this.color}</span>
  <span>${this.listingDate}</span>
  <button onclick="deleteNote()" class="btn btn-danger" >delete<i class="mdi mdi-recycle"></i></button>
      </div>`
  }

  get activeTemplate() {
    return /*html*/ ` <div class="container-fluid border border-primary">
    <section class="row">
      <button class="btn btn-info col-12" data-bs-toggle="collapse" data-bs-target="#NoteFormCollapse">
        Add Note! <i class="mdi mdi-note"></i>
      </button>
  
      <div class="collapse" id="NoteFormCollapse">
  
        <form class="row p-2" onsubmit="app.NotesController.createNote()">
  
          <div class="form-floating mb-3 col-4">
            <input required type="text" minLength="3" maxLength="15" class="form-control" id="noteTitle" name="Title" placeholder="Note Title">
            <label for="noteTitle">Note Title</label>
          </div>

          <div class="form-floating mb-3">
            <textarea  required maxLength="144" class="form-control" placeholder="Note Body" name="Body" id="noteBody"
              style="height: 200px"></textarea>
            <label for="noteBody">Note body</label>
          </div>

          <div class="form-floating mb-3 col-2">
            <input  required type="color" class="form-control" id="noteColor" name="Color" placeholder="noteColor">
            <label for="noteColor">Note Color</label>
          </div>

  
          <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
          <div class="text-end">
            <button type="submit" class="btn btn-info">Create Note</button>
  
          </div>
        </form>
      </div>
    </section>
  
      <section class="row justify-content-center" id="cars">
        <!-- STUB car template -->
        <!-- <div class="col-md-10 elevation-5 rounded-top">
          <div class="row">
            <div class="col-4 p-0">
              <img class="img-fluid rounded-start"
                src="https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627"
                alt="make model">
            </div>
            <div class="col-8">
              <h2 class="text-center">Year Make Model</h2>
              <div class="d-flex justify-content-around pt-3">
                <span>$Price</span>
                <span>Date</span>
              </div>
              <p>Description</p>
            </div>
          </div>
        </div> -->
  
      </section>
    
    
      </div>`
  }
}

