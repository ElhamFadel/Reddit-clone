const connection = require('../../connection');

module.exports = (id) => connection.query('UPDATE posts SET votes = votes - 1 WHERE id = $1', [id]);
