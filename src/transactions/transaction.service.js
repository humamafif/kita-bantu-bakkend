const transactionsRepository = require("./transaction.repository");

const getTransactions = async () => {
    return await transactionsRepository.findTransactions();
}

const getTransactionById = async (id) => {
    if (typeof id !== 'number' || isNaN(id)) {
        throw new Error('Invalid ID');
    }
    const transaction = await transactionsRepository.findTransactionById(id);
    if (!transaction) {
        throw new Error('Transaction not found');
    }
    return transaction;
}

const postTransaction = async (transaction) => {
    const newTransaction = await transactionsRepository.createTransaction(transaction);
    return newTransaction;
}

const deleteTransaction = async (id) => {
    await getTransactionById(id);
    await transactionsRepository.deleteTransaction(id);
}

module.exports = {
    getTransactions,
    getTransactionById,
    postTransaction,
    deleteTransaction,
};
