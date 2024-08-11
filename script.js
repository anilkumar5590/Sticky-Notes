// Selecting the "Add Note" button and the container where notes will be added
const addNoteBtn = document.querySelector('#addNote');
const container = document.querySelector('#container');

// Adding a click event listener to the "Add Note" button
addNoteBtn.addEventListener("click", addStickyNote);

// Function to add a new sticky note to the container
function addStickyNote() {
    // Create a new div element for the sticky note
    const note = document.createElement("div");
    // Add the 'sticky-note' class to the newly created div for styling
    note.classList.add("sticky-note");
    
    // Setting the inner HTML of the sticky note, which includes icons and a textarea
    note.innerHTML = `
        <div id="icons">
            <i class="save fas fa-save"></i>
            <i class="delete fas fa-trash"></i>
        </div>
        <textarea placeholder="Write Something Here ..."></textarea>`;

    // Selecting the delete and save icons, and the textarea within the note
    const deleteIcon = note.querySelector(".delete");
    const saveIcon = note.querySelector(".save");
    const textarea = note.querySelector("textarea");

    // Adding an event listener to the delete icon to remove the note when clicked
    deleteIcon.addEventListener("click", () => {
        note.remove(); // Removes the note from the DOM
        saveStickyNote(); // Saves the current state of all notes to localStorage
    });

    // Adding an event listener to the save icon to save notes when clicked
    saveIcon.addEventListener("click", saveStickyNote);
    
    // Adding an event listener to the textarea to save notes when text is entered
    textarea.addEventListener("input", saveStickyNote);

    // Appending the newly created note to the container
    container.appendChild(note);
}

// Function to save all sticky notes' content to localStorage
function saveStickyNote() {
    // Selecting all textareas within the sticky notes
    const sticky_notes = document.querySelectorAll(".sticky-note textarea");
    
    // Creating an array to store the content of each sticky note
    const store = [];
    sticky_notes.forEach(note => {
        store.push(note.value); // Adding the content of each note to the array
    });

    // If there are no notes, remove them from localStorage
    if (store.length === 0) {
        localStorage.removeItem("sticky_notes");
    } else {
        // Otherwise, save the notes array as a JSON string in localStorage
        localStorage.setItem("sticky_notes", JSON.stringify(store));
    }
}

// Function to load sticky notes from localStorage when the page is loaded
function loadStickyNotes() {
    // Retrieving the stored notes from localStorage
    const loadNotes = JSON.parse(localStorage.getItem("sticky_notes"));

    // If there are notes stored in localStorage, recreate each sticky note
    if (loadNotes !== null) {
        loadNotes.forEach(noteText => {
            addStickyNote(); // Create a new sticky note
            // Select all textareas and set the last one's value to the stored text
            const notes = document.querySelectorAll(".sticky-note textarea");
            const lastNote = notes[notes.length - 1]; // Get the most recently added note
            lastNote.value = noteText; // Set its value to the stored note text
        });
    } else {
        // If there are no stored notes, create a new empty sticky note
        addStickyNote();
    }
}

// Call the loadStickyNotes function to load any stored notes when the page is loaded
loadStickyNotes();
