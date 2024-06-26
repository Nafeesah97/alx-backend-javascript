import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/', routes);

const PORT = 1245;

export default app;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
