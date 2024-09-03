const CrudService = require("./crud-service");
const NotesRepository = require("../repository/notes-repository");

class NotesService extends CrudService{
    constructor() {
        const notesRepository = new NotesRepository();
        super(notesRepository);
    }
}

module.exports = NotesService;
