const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const calc = (req, res) => {
    try {
        const result = (parseFloat(req.body.num1) + parseFloat(req.body.num2)) || 0;
        res.status(200).json({ result })
    } catch (error) {
        throw error;
    }
};

app.get("*", (req, res) => {
    res.send('Oops, better luck next time!')
});
app.post("/calc", calc);

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
