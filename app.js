import express from 'express';
import aiService from './services/ai.service.js';
import router from './routes/ai.routes.js';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors({ origin: '*' }));
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(express.json());
app.use('/ai', router);
 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});