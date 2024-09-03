const CrudRepository = require("./crud-repository");
const { Note } = require("../models/index");
class NotesRepository extends CrudRepository {
    constructor() {
        super(Note);
    }
}

module.exports = NotesRepository;
