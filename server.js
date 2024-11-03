const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
// const errorHandler = require("./middleware/errorHandler");
const { testConnection } = require("./config/prisma");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

testConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
