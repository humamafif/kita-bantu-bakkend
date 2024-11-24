const donorRepository = require('./donor.repository');

const getAllDonor = async () => {
    const donors = await donorRepository.findDonors();
    return donors;
}

const getDonorById = async (id) => {
    if (typeof id !== 'number' || isNaN(id)) {
        throw new Error('Invalid ID');
    }
    const donor = await donorRepository.findDonorById(id);
    if (!donor) {
        throw new Error('Donor not found');
    }
    return donor;
}

const postDonor = async (donor) => {
    const newDonor = await donorRepository.createDonor(donor);
    return newDonor;
}

const putDonor = async (id, donor) => {
    await getDonorById(id);
    const updatedDonor = await donorRepository.updateDonor(id, donor);
    return updatedDonor;
}

const deleteDonor = async (id) => {
    await getDonorById(id);
    await donorRepository.deleteDonor(id);
}

module.exports = { getAllDonor, getDonorById, postDonor, putDonor, deleteDonor };