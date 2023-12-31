import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();



export const Register = async (req, res) => {
    const {name, email, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: 'Kesalahan Password dan konfirmasi Password'});

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
            const users = await prisma.users.create({
            data: {
                name: name,
                email: email,
                password: hashPassword,
                role: role
            }
        });
        res.status(201).json(users);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
    
}