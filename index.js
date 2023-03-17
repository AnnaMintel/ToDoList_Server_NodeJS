const express = require('express');

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log('app started')
})

app.get('/', (req, res) => {
    res.send('Server work')
})