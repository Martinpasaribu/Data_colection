import {PrismaClient} from "@prisma/client";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export  const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.status(401).send(' Refresh Token neng ngendi !!!');

        const user = await prisma.users.findMany( {
            where : {
                refresh_token: refreshToken
            }   
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => 
        {
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const accessToken = jwt.sign({ userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn : '15s'
            });
            res.json({ accessToken})
                
        });

    } catch (error) {
        console.log(error)
    }
}

