const prisma = require('../db');

const findBanks = async () => {
    return await prisma.bank.findMany();
}

const findBankById = async (id) => {
    return await prisma.bank.findUnique({
        where: {
            id: id
        }
    });
}

const createBank = async (bank) => {
    return await prisma.bank.create({
        data: bank
    });
}

const updateBank = async (id, bank) => {
    return await prisma.bank.update({
        where: {
            id: id
        },
        data: bank
    });
}

const deleteBank = async (id) => {
    await prisma.bank.delete({
        where: {
            id
        }
    });
}

module.exports = {
    findBanks,
    findBankById,
    createBank,
    updateBank,
    deleteBank
}