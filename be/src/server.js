import express from 'express';
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());
app.use("/api/auth", authRoutes);



app.listen(3000, () => {
    console.log(`Backend running on port ${PORT}`);});

