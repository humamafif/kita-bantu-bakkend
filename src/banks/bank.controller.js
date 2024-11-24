const express = require('express');
const bankService = require('./bank.service');
const asyncHandler = require('../middleware/asyncHandler');
const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) => {
    try {
        const banks = await bankService.getBanks();
        res.status(200).json({ data: banks });
    } catch (error) {
        next(error);
    }
}));

router.get('/:id', asyncHandler(async (req, res, next) => {
    try {
        const bank = await bankService.getBankById(parseInt(req.params.id));
        res.status(200).json({ data: bank });
    } catch (error) {
        next(error);
    }
}));

router.post('/', asyncHandler(async (req, res, next) => {
    try {
        const data = await bankService.postBank(req.body);
        res.status(201).json({ message: 'Bank created', status_code: 201, data: data });
    } catch (error) {
        next(error);
    }
}));

router.put('/:id', asyncHandler(async (req, res, next) => {
    try {
        const data = await bankService.putBank(parseInt(req.params.id), req.body);
        res.status(200).json({ message: 'Bank updated', status_code: 200, data: data });
    } catch (error) {
        next(error);
    }
}));

router.delete('/:id', asyncHandler(async (req, res, next) => {
    try {
        await bankService.deleteBank(parseInt(req.params.id));
        res.status(201).json({ message: 'Bank deleted', status_code: 201 });
    } catch (error) {
        next(error);
    }
}));

module.exports = router;