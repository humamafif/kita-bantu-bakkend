const progamRepository = require('./program.repository');

const getAllProgram = async () => {
    return await progamRepository.findPrograms();
}

const getProgramById = async (id) => {
    if (typeof id !== "number" || isNaN(id)) {
        throw new Error("Invalid ID");
    }
    const program = await progamRepository.findProgramById(id);
    if (!program) {
        throw new Error("Program not found");
    }
    return program;
}

const postProgram = async (data) => {
    return await progamRepository.createProgram(data);
}

const putProgram = async (id, data) => {
    await getProgramById(id);
    const updateProgram = await progamRepository.updateProgram(id, data);
    return updateProgram;
}

const deleteProgram = async (id) => {
    await getProgramById(id);
    await progamRepository.deleteProgram(id);
}

module.exports = {
    getAllProgram, getProgramById, postProgram, putProgram, deleteProgram,
}