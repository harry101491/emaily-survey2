const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Node is Best!!</h1>');
});

app.listen(PORT, () => {
    console.log(`App has started listening on: ${PORT}`);
});