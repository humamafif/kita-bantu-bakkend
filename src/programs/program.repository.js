const prisma = require("../db")

const findPrograms = async () => {
    return await prisma.programs.findMany();
}

const findProgramById = async (id) => {
    return await prisma.programs.findUnique({
        where: { id }
    });
}

const createProgram = async (data) => {
    return await prisma.programs.create({
        data
    });
}

const updateProgram = async (id, data) => {
    return await prisma.programs.update({
        where: { id },
        data: {
            name: data.name,
            description: data.description,
            goal_amount: data.goal_amount,
            start_date: data.start_date,
        }
    });
}

const deleteProgram = async (id) => {
    return await prisma.programs.delete({
        where: { id }
    })
}

module.exports = {
    findPrograms,
    findProgramById,
    createProgram,
    updateProgram,
    deleteProgram
}