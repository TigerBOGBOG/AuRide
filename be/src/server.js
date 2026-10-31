import express from 'express';
import authRoutes from "./routes/auth.js";
import pageRoutes from "./routes/pageRoutes.js";
import cors from "cors";

const app = express();
const port = 5173;

app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());
app.use("/", pageRoutes);
app.use("/api/auth", authRoutes);



app.listen(3000, () => {
    console.log("Backend running on port 3000");
});

