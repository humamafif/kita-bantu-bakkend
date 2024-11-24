const prisma = require('../db');

const findDonations = async () => {
    return await prisma.donations.findMany({
        include: {
            donor: true,
            program: true,
        },
    });
};

const createDonation = async (data) => {
    return await prisma.donations.create({
        data,
    });
};

const findDonationById = async (id) => {
    return await prisma.donations.findUnique({
        where: { id },
        include: {
            donor: true,
            program: true,
        },
    });
};

const deleteDonation = async (id) => {
    await prisma.donations.delete({
        where: { id },
    });
};

module.exports = {
    findDonations,
    createDonation,
    findDonationById,
    deleteDonation,
};
