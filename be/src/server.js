import express from 'express';
import authRoutes from "./routes/auth.js";
import pageRoutes from "./routes/pageRoutes.js";

const app = express();
const port = 5173;

app.use(express.json());
app.use("/", pageRoutes);
app.use("/api/auth", authRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

