express = require('express');

const app = express();
const PORT = 3000;

app.use('/static', express.static("/src"));

app.get('/*', (req, res) => {
    res.sendFile("index.html", {root: "../static/"});
})



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});