# ToDo List Application

## Overview
This is a simple ToDo List application that allows users to add, delete, and clear tasks. It uses local storage to save tasks, so they persist even after refreshing the page.

## Features
- Add tasks with a title and description.
- Display tasks in a table format.
- Delete individual tasks.
- Clear the entire task list.
- Uses local storage for data persistence.
- Responsive and styled with Bootstrap 4.

## Technologies Used
- HTML
- CSS (Bootstrap 4)
- JavaScript (DOM Manipulation & Local Storage)

## File Structure
```
project-folder/
│── index.html       # Main HTML file
│── CSS/
│   └── style.css    # Stylesheet
│── JS/
│   └── script.js    # JavaScript file for functionality
```

## How to Use
1. Open `index.html` in a web browser.
2. Enter a task title and description.
3. Click the "Add to list" button to add a task.
4. Click the "Delete" button to remove a specific task.
5. Click the "Clear List" button to remove all tasks.
6. Tasks persist even after a page refresh due to local storage.

## JavaScript Functionality
- `getAndUpdate()`: Adds a task to local storage and updates the list.
- `update()`: Displays tasks from local storage in the table.
- `deleted(index)`: Removes a specific task from local storage.
- `cleared()`: Clears all tasks from local storage.

## Dependencies
- Bootstrap 4 for styling.
- jQuery for Bootstrap functionalities.

## Future Enhancements
- Add edit functionality for tasks.
- Implement a due date feature.
- Add categories and filtering options.
