const prisma = require('../db');

const findDonors = async () => {
    const donors = await prisma.donors.findMany();
    return donors;
}

const findDonorById = async (id) => {
    const donor = await prisma.donors.findFirst(
        {
            where: {
                id: id
            }
        }
    );
    return donor;
}

const createDonor = async (donor) => {
    const newDonor = await prisma.donors.create({
        data: {
            name: donor.name,
            email: donor.email,
            phone_number: donor.phone_number,
            address: donor.address,
        }
    });
    return newDonor;
}

const updateDonor = async (id, donor) => {
    const updatedDonor = await prisma.donors.update({
        where: {
            id: id
        },
        data: {
            name: donor.name,
            email: donor.email,
            phone_number: donor.phone_number,
            address: donor.address,
        }
    });
    return updatedDonor;
}

const deleteDonor = async (id) => {
    const deletedDonor = await prisma.donors.delete({
        where: {
            id: id
        }
    });
    return deletedDonor;
}

module.exports = { findDonors, findDonorById, createDonor, updateDonor, deleteDonor };