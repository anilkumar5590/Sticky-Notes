# Hi, I'm Anil Kumar! 👋

## Sticky Notes Web Application

This project is a simple web-based sticky notes application that allows users to add, save, and delete notes. The notes are stored in the browser's local storage, so they persist even after the page is refreshed or closed.

## Features

- **Add Note**: Users can add a new sticky note by clicking the "Add Note" button.
- **Delete Note**: Each sticky note has a delete icon that allows the user to remove the note.
- **Save Notes**: Notes are automatically saved to the browser's local storage as the user types or when they click the save icon.
- **Persistent Storage**: The application uses local storage to save the notes, ensuring that the notes persist even after the browser is closed or refreshed.

## How It Works

### HTML Structure

- The HTML file contains a `button` to add new notes and a `div` container where all sticky notes will be displayed.
- The Font Awesome library is used to add icons to the buttons.

### CSS Styling

- Basic styling is applied to the body, the add note button, and the sticky notes.
- The sticky notes are displayed using a flexbox layout to ensure they are responsive and well-aligned.

### JavaScript Functionality

- **addStickyNote()**: Creates a new sticky note element and appends it to the container. It also adds event listeners for the delete and save actions.
- **saveStickyNote()**: Collects all the sticky notes' content and saves them to local storage.
- **loadStickyNotes()**: Loads any saved sticky notes from local storage when the page is loaded and displays them in the container.

## Files

- `index.html`: The main HTML file that contains the structure of the webpage.
- `style.css`: The CSS file that styles the page, including the layout and appearance of the sticky notes and buttons.
- `script.js`: The JavaScript file that adds functionality to the application, including adding, saving, and deleting notes.

## Getting Started

To run the application locally, simply open the `index.html` file in a web browser. The application will load any previously saved sticky notes from local storage and allow you to add, delete, and save new notes.

### Dependencies

- [Font Awesome](https://fontawesome.com/) is used for the icons in the add and delete buttons.

## Future Improvements

- Add color options for sticky notes.
- Implement drag-and-drop functionality to rearrange notes.
- Add a feature to export notes as a text file.

## Preview
[Checkout Here](https://anilkumar5590.github.io/Sticky-Notes-/)

## 🔗 Follow us
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anilkumarkonathala/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
## Feedback

If you have any feedback, please reach out to us at konathalaanilkumar143@gmail.com

