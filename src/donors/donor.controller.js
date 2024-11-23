const express = require('express');

const asyncHandler = require('../middleware/asyncHandler');

const donorService = require('./donor.service')
const router = express.Router();


router.get('/', asyncHandler(async (req, res, next) => {
    try {
        const donors = await donorService.getDonorById();
        res.status(200).json({ data: donors });
    } catch (error) {
        next(error);
    }
}));

router.get('/:id', asyncHandler(async (req, res, next) => {
    try {
        const donor = await donorService.getDonorById(parseInt(req.params.id));
        res.status(200).json(donor);
    } catch (error) {
        next(error);
    }
}));

router.post('/', asyncHandler(async (req, res, next) => {
    try {
        const data = await donorService.addDonor(req.body);
        res.status(201).json({ message: 'Donor created', status_code: 201, data: data });
    } catch (error) {
        next(error);
    }
}));

router.put('/:id', asyncHandler(async (req, res, next) => {
    try {
        const data = await donorService.putDonor(parseInt(req.params.id), req.body);
        res.status(200).json({ message: 'Donor updated', status_code: 200, data: data });
    } catch (error) {
        next(error);
    }
}));

router.delete('/:id', asyncHandler(async (req, res, next) => {
    try {
        await donorService.deleteDonor(parseInt(req.params.id));
        res.status(204).json({ message: 'Donor deleted', status_code: 204 });
    } catch (error) {
        next(error);
    }
}));

module.exports = router;