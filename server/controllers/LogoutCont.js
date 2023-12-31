import {PrismaClient} from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();



export const Logout = async(req, res) => { 

    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await prisma.users.findMany( {
        where : {
            refresh_token: refreshToken
        }
    });

    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id ;

    await prisma.users.update ( {
        where: {
            id: userId
        },
        data: {
            refresh_token: null
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
    



}