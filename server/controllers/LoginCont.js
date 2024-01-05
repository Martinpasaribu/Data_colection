import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

export const Login = async (req, res) => {
    try {
  
        const user = await prisma.users.findMany({
            where : {
                email: req.body.email,
            }
            
        });

        
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if(!match) return res.status(400).json({msg: "wrong password"});
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const role = user[0].role;    
  
    const accessToken = jwt.sign({userId, name, email, role}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '20s'
    });

    const refreshToken = jwt.sign({userId, name, email, role}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '1d'
    });
    // console.log(refreshToken);

    await prisma.users.update({
        where:{
            id: userId
        },
        data: {
          refresh_token: refreshToken
        }
    });
    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

    res.json({ accessToken});

} catch (error) {
    res.status(404).json({ msg: " Email atau Username tidak ditemukan"});
}
}