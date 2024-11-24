const prisma = require("../db")

const findTransactions = async () => {
    return await prisma.transactions.findMany({
        include: {
            donation: true,
            bank: true,
        },
    });
}

const findTransactionById = async (id) => {
    return await prisma.transactions.findUnique({
        where: { id },
        include: {
            donation: true,
            bank: true,
        },
    });
}

const createTransaction = async (data) => {
    return await prisma.transactions.create({
        data,
    });
}

const deleteTransaction = async (id) => {
    await prisma.transactions.delete({
        where: { id },
    });
}

module.exports = {
    findTransactions,
    findTransactionById,
    createTransaction,
    deleteTransaction,
}