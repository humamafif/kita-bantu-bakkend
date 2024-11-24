const bankRepository = require('./bank.repository');

const getBanks = async () => {
    return await bankRepository.findBanks();
}

const getBankById = async (id) => {
    if (typeof id !== 'number' || isNaN(id)) {
        throw new Error('Invalid ID');
    }
    const bank = await bankRepository.findBankById(id);
    if (!bank) {
        throw new Error('Bank not found');
    }
    return bank;
}

const postBank = async (bank) => {
    const newBank = await bankRepository.createBank(bank);
    return newBank;
};

const putBank = async (id, bank) => {
    await getBankById(id);
    const updatedBank = await bankRepository.updateBank(id, bank);
    return updatedBank;
};

const deleteBank = async (id) => {
    await getBankById(id);
    await bankRepository.deleteBank(id);
};

module.exports = {
    getBanks,
    getBankById,
    postBank,
    putBank,
    deleteBank,
};
