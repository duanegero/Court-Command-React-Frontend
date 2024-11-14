# Court Command

This React frontend app will all you to interact with a backend API to manage and display data.

## Table of contents

- [Installation](#installation)
- [Backend Repository](#backend)
- [Usage](#usage)
- [License](#license)

## Installation

1. Clone Repository:<br>
   `https://github.com/duanegero/Court-Command-React-Frontend.git`
2. Navigate to the Project Directory<br>
3. Install Dependencies:<br>
   `npm install`
4. Start the Development Server<br>
   `npm start`
   Will open[http://localhost:3000](http://localhost:3000) to view it in your browser.

## Backend

[Basketball-Roster-Coach-API](https://github.com/duanegero/Basketball-Roster-Coach-API.git)<br>
Ensure the backend API server is running and configured to allow requests from the frontend.<br>

## Usage

The app provides an interactive interface for users to Create, Read, Update and Delete data.<br>

1. **Create/Post**<br>
   Add a new player or coach to the database.
2. **Read/Get**<br>
   Find players or coach in the database based on ID/Team Name.
3. **Update/Put**<br>
   Change a player or coach's information in the database.
4. **Delete**<br>
   Permanently remove a player or coach from the database.

### Example

To update a Coach:

- Click "Update Coach" in top navigation
- Fill out all the form fields
- Click "Submit" button to send data to Backend API
- Updated Coach profile will display bottom of page

## License

This project is licensed under the MIT License.
