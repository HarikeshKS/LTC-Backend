const NotesService = require("../services/notes-service");

const notesService = new NotesService();

// POST -> /notes -> data in req.body
const create = async (req, res) => {
    try {
        const response = await notesService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created notes",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create notes",
            err: error,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await notesService.destroy(req.params.id);
        return res.status(201).json({
            data: {response},
            success: true,
            message: "Successfully deleted notes",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete notes",
            err: error,
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await notesService.update(req.body, req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully updated notes",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update notes",
            err: error,
        });
    }
};
// POST -> /notes -> data in req.body
const get = async (req, res) => {
    try {
        const response = await notesService.get(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched your notes",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch notes",
            err: error,
        });
    }
};
const getAll = async (req, res) => {
    try {
        const response = await notesService.getAll(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched all notes",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch all the notes",
            err: error,
        });
    }
};

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
};
