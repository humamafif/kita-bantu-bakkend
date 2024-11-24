const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const transactionService = require("./transaction.service");
const router = express.Router();

router.get("/", asyncHandler(async (req, res, next) => {
    try {
        const transactions = await transactionService.getTransactions();
        res.status(200).json({ data: transactions });
    } catch (error) {
        next(error);
    }
}));

router.get("/:id", asyncHandler(async (req, res, next) => {
    try {
        const transaction = await transactionService.getTransactionById(parseInt(req.params.id));
        res.status(200).json({ data: transaction });
    } catch (error) {
        next(error);
    }
}));

router.post("/", asyncHandler(async (req, res, next) => {
    try {
        const data = await transactionService.postTransaction(req.body);
        res.status(201).json({ message: "Transaction created", status_code: 201, data: data });
    } catch (error) {
        next(error);
    }
}));

router.delete("/:id", asyncHandler(async (req, res, next) => {
    try {
        await transactionService.deleteTransaction(parseInt(req.params.id));
        res.status(201).json({ message: "Transaction deleted", status_code: 201 });
    } catch (error) {
        next(error);
    }
}));

module.exports = router;