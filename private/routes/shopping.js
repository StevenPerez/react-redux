import path from 'path';
import Locallydb from 'locallydb';
import _ from 'lodash';

const db = new Locallydb(path.join(__dirname, '../data'));
const tblArticle = db.collection('articles');

export default () => {

	return {
		create(req, res) {

			const {article} = req.body;
			const result = tblArticle.insert(article);

			if (_.isNumber(result)) {
				res.status(201).end(); // Created
			} else {
				res.status(409).end(); // Conflict
			}
		},
		read(req, res) {
			res.send(tblArticle.items);
		},
		update(req, res) {

			const {article} = req.body;
			const {id} = req.params;

			const result = tblArticle.update(_.toNumber(id), article);
			if (result) {
				res.status(202).end(); // Accepted
			} else {
				res.status(409).end(); // Conflict
			}
		},
		delete(req, res) {

			const {id} = req.params;

			const result = tblArticle.remove(_.toNumber(id));
			if (result) {
				res.status(202).end(); // Accepted
			} else {
				res.status(409).end(); // Conflict
			}
		}
	};
};
