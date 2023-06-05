const express = require('express');
const User_router = require('./routes/User-router')
require('./config/config(db)');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", User_router);
app.listen(3001, () => console.log("server started at 3001"));