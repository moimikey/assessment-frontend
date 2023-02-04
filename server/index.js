const app = require('./app');

app.listen(process.env.SERVER_PORT ?? 3030, () => {
	console.log('Listening on port 3030');
});
