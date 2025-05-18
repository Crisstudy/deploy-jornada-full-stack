//  API significa Application Progamning Interface
// POST, GET, PUT, DELETE
//  CRUD - Creat Read Update Delete
import express from 'express';
import { artistArray } from "../../front-end/src/assets/database/artists.js"
import { songsArray } from "../../front-end/src/assets/database/songs.js"

const app = express();
const PORT = 3001;

app.use(cors());
// app.use(express.json());

app.get("/api/", (request, response) => {
    response.send("Só vamos trabalhar com os endpoints '/artist'e '/songs' ");
});

app.get("/api/artists", (request, response) => {
    response.send(artistArray);
});

app.get("/api/songs", (request, response) => {
    response.send(songsArray);
});

app.use(express.static('../../front-end/dist'))

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
});