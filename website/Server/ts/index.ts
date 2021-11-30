import * as express from 'express';
import * as path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, '../static/www/index.html'));
});

app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
