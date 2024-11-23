const prisma = require('../db');

const findDonations = async () => {
    return prisma.donations.findMany({
        include: {
            donor: true,
            program: true,
        },
    });
};

const createDonation = async (data) => {
    return prisma.donations.create({
        data,
    });
};

const findDonationById = async (id) => {
    return prisma.donations.findUnique({
        where: { id },
        include: {
            donor: true,
            program: true,
        },
    });
};

const deleteDonation = async (id) => {
    return prisma.donations.delete({
        where: { id },
    });
};

module.exports = {
    findDonations,
    createDonation,
    findDonationById,
    deleteDonation,
};
