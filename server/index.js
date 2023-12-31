import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();

const app = express();

app.use(cors(
{
    origin: ["https://client-ten-psi.vercel.app","https://www.postman.com/","http://localhost:3000","https://client-po4.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE" ], // Perubahan disini ke 'methods'
    credentials: true,
}));

app.use(express.json());
app.use(ProductRoute);

app.use("/", (req, res) => {
    res.send("Server is running");
});

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...' + process.env.APP_PORT);
});
