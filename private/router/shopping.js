import express from 'express';
import Shopping from '../routes/shopping';

const Router = express.Router();
const shopping = Shopping();

Router.post('/api/shopping/articles', shopping.create);
Router.get('/api/shopping/articles', shopping.read);
Router.put('/api/shopping/articles/:id', shopping.update);
Router.delete('/api/shopping/articles/:id', shopping.delete);

export default Router;
