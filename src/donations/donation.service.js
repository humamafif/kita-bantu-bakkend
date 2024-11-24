const donationRepository = require('./donation.repository');

const getDonations = async () => {
    const donors = await donationRepository.findDonations();
    return donors;
}

const getDonationById = async (id) => {
    if (typeof id !== 'number' || isNaN(id)) {
        throw new Error('Invalid ID');
    }
    const donation = await donationRepository.findDonationById(id);
    if (!donation) {
        throw new Error('Donation not found');
    }
    return donation;
}

const postDonation = async (donation) => {
    const newDonation = await donationRepository.createDonation(donation);
    return newDonation;
}

const deleteDonation = async (id) => {
    await getDonationById(id);
    await donationRepository.deleteDonation(id);
}

module.exports = {
    getDonations, getDonationById, postDonation, deleteDonation,
};