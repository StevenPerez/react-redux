import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import ejs from 'ejs-locals';
import methodOverride from 'method-override';

import ShoppingRouter from './private/router/shopping';

const app = new express();
const router = express.Router();

// Static Path
app.use(express.static(path.join(__dirname, '/public')));
// Views Path
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', ejs);
// JSON Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Enable PUT and DELETE
app.use(methodOverride());
// Index Page
router.get('/', function(req, res) {
	res.render('index.html');
});

// Shopping Routers
app.use('/', ShoppingRouter);

// Apply Routers
app.use('/', router);

app.listen(2500, () => {
	console.log('App running in port 2500');
});
