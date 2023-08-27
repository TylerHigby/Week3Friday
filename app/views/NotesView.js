export const NotesView =
/*html*/ ` <div class="container">
    <section class="row">
    <div class="col-12 text-center">

  </section>
</div>

<div class="row">
<button data-bs-toggle="collapse" data-bs-target="#noteFormCollapse" class="btn btn-info col-12">
Add Note! <i class="mdi mdi-note"></i>
</button>
<div  class="collapse" id="noteFormCollapse">
<form class="row p-2" onsubmit="app.NotesController.createNote()">
  
    <div class="form-floating mb-3 col-4">
            <input required type="text" minLength="3" maxLength="15" class="form-control" id="noteTitle" name="title" placeholder="Note Title">
            <label for="noteTitle">Title</label>
    </div>

          <div class="form-floating mb-3">
            <textarea  required maxLength="144" class="form-control" placeholder="Note Body" name="body" id="noteBody"
              style="height: 200px"></textarea>
            <label for="noteBody">Body</label>
          </div>

          <div class="form-floating mb-3 col-2">
            <input  required type="color" class="form-control" id="noteColor" name="color" placeholder="noteColor">
            <label for="noteColor">Color</label>
          </div>

  
          <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
          <div class="text-end">
            <button type="submit" class="btn btn-info">Create Note</button>
  
          </div>
  </form>
</div>



<div class="row">
  <div class="col-5" id="note-list">

  </div>

  <div class="col-7" id="active-note">

  </div>


  
</div>
</div>`