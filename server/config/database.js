const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('.tmp/data.db', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
