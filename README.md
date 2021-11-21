# weather app

<br />

### Repository contains the following files
- weather-backend
- weather-ui

<br />

### Architecture Diagram 

![Architecture diagram image](./images-for-readme/architecture-diagram.png)

<br />

### Sequence Diagrams

* Loading Cities Data to DB
    > ![Sequence diagram image](./images-for-readme/load-cities-sequence-diagram.png)

* UI Flow
    > ![Sequence diagram image](./images-for-readme/ui-flow-diagram.png)

<br />

### High Level explanation of flow

* User is displayed with a table view of cities fetched from the backend, with capabilities of searching and pagination.
* User selects a city for which they need weather info about.
* Pop up is dislplayed showing weather info about the City fetched from the External API

<br />

### UI Screenshots

* Cities Table Load UI
    > ![UI image](./images-for-readme/table-load-ui.png)

* Weather Info of City UI
    > ![Sequence diagram image](./images-for-readme/weather-info-ui.png)

<br />

### Stack used:
- weather-ui: Angular 12
- weather-backend: Python, flask
- Database: MongoDb

<br />

### Steps To run application
    
    To run the backend run the following command in the weather-backend directory:
    Add the mongo db connection string in the database_connection.py file
        python3 weather-backend.py

    To run the frontend run the following commands in weather-ui directory:
        npm install
        npm run build
        npm start

UI can be seen in http://localhost:8080
