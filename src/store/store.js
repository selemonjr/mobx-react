export function createNotesStore(){
    return {
      notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [],
      addNote(text){
        this.notes.push({
          text, id: new Date().getTime().toString(),
        });
        localStorage.setItem("notes", JSON.stringify(this.notes))
      },
      removeNote(id){
        this.notes = this.notes.filter(note => note.id !== id);
        localStorage.setItem("notes", JSON.stringify(this.notes))
      },
    }
  }
