const express = require('express');
const cors = require('cors');
const { v4: uuid } = require('uuid');
const bodyParser = require('body-parser')
const VALUES = require('./values');
const PAGES = require('./pages');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/page/:id', (req, res) => {
	const paramId = req.params.id.toLowerCase();
	const page = PAGES.find(({ id }) => id === paramId);

	if (page) {
		res.json({
			data: page.data,
		});
	} else {
		res.status(404).json({
			error: 'Page Not Found',
		});
	}
});

app.get('/integration/weather', (req, res) => {
	const { lat: queryLat, lon: queryLon } = req.query;
	if (isNaN(parseFloat(queryLon)) || isNaN(parseFloat(queryLat))) {
		res.status(400).json({
			error: 'Invalid Coordinates',
		});
		return;
	}
	const weatherLocation = VALUES.WEATHER_LOCATIONS.find(({ lat, lon }) => (
		lat === queryLat && lon === queryLon
	));
	if (weatherLocation) {
		res.json({
			data: weatherLocation,
		});
	} else {
		res.status(404).json({
			error: 'Weather Not Available For Coordinates',
		});
	}
});

module.exports = app;
