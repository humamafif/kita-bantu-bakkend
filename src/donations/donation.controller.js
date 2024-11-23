const express = require('express');

const asyncHandler = require('../middleware/asyncHandler');

const donationService = require('./donation.service')
const router = express.Router();


router.get('/', asyncHandler(async (req, res, next) => {
    try {
        const donors = await donationService.getDonations();
        res.status(200).json({ data: donors });
    } catch (error) {
        next(error);
    }
}));

router.get('/:id', asyncHandler(async (req, res, next) => {
    try {
        const donor = await donationService.getDonationById(parseInt(req.params.id));
        res.status(200).json({ data: donor });
    } catch (error) {
        next(error);
    }
}));

router.post('/', asyncHandler(async (req, res, next) => {
    try {
        const data = await donationService.addDonation(req.body);
        res.status(201).json({ message: 'Donor created', status_code: 201, data: data });
    } catch (error) {
        next(error);
    }
}));

router.delete('/:id', asyncHandler(async (req, res, next) => {
    try {
        await donationService.deleteDonation(parseInt(req.params.id));
        res.status(202).json({ message: 'Donor deleted', status_code: 202 });
    } catch (error) {
        next(error);
    }
}));

module.exports = router;