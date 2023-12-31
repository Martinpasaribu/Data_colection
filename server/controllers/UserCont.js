import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient();

export const getUsers = async (req, res) =>{
    try {
        const response = await prisma.users.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                password: false 
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

