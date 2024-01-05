import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/ProductRoute.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors(
{
    origin: ["https://www.postman.com","http://localhost:3000","https://data-colection.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE","OPTIONS" ], // Perubahan disini ke 'methods'
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.use("/", (req, res) => {
    res.send("Server is running");
});

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...' + process.env.APP_PORT);
});
