const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const restaurantRouter = require("./routes/restaurant");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/customer", userRouter);
app.use("/api/restaurant", restaurantRouter);
app.use("/api/order", orderRouter);

app.get("/api/test", (req, res) => res.send("Swiggy Clone Backend Apis"));

app.listen(5000, () => {
    console.log("Server is Up & Running");
});