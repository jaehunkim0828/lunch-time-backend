import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import 'express-async-errors';

import rootRouter from './routes/index.js';

const app = express();

const port = 8888;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/', rootRouter);

//another path check
app.use((req, res, next) => {
    res.sendStatus(404);
});

//체크 못한 error
app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
  })

app.listen(port, () => console.log(`server is running in ${port} port`))