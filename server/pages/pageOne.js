const VALUES = require('../values');

module.exports = {
    lists: [
        {
            id: 0,
            components: [1, 2]
        }
    ],
    components: [
        {
            id: 1,
            type: 'image',
            options: VALUES.IMAGES[0],
        },
        {
            id: 2,
            type: 'weather',
            options: {
                lon: VALUES.WEATHER_LOCATIONS[0].lon,
                lat: VALUES.WEATHER_LOCATIONS[0].lat,
            }
        },
    ]
};
