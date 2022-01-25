import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/test', (req, res) => res.json({ message: 'foi' }));

app.listen(3333, () => console.log('Entrou'));
