const express = require('express');
const asyncHandler = require('../middleware/asyncHandler')

const programService = require('./program.service')
const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) => {
    try {
        const program = await programService.getAllProgram();
        res.status(200).json({ data: program });
    } catch (error) {
        next(error)
    }
}));

router.get('/:id', asyncHandler(async (req, res, next) => {
    try {
        const data = await programService.getProgramById(parseInt(req.params.id));
        res.status(200).json({ data: data });
    } catch (error) {
        next(error);
    }
}));

router.post("/", asyncHandler(async (req, res, next) => {
    try {
        const data = await programService.postProgram(req.body);
        res.status(201).json({ message: "Program Created", status_code: 201, data: data });
    } catch (error) {
        next(error)
    }
}));

router.put("/:id", asyncHandler(async (req, res, next) => {
    try {
        const data = await programService.putProgram(parseInt(req.params.id), req.body);
        res.status(200).json({ message: "Program updated", status_code: 200, data: data })
    } catch (error) {
        next(error)
    }
}))

router.delete("/:id", asyncHandler(async (req, res, next) => {
    try {
        await programService.deleteProgram(parseInt(req.params.id));
        res.status(202).json({ message: "Donor deleted", status_code: 202 });
    } catch (error) {
        next(error)
    }
}))

module.exports = router;