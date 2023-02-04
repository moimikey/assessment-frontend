const VALUES = require('../values');

module.exports = {
    variables: [
        {
            name: 'show_weather',
            type: 'string',
            initialValue: 'hide',
        },
    ],
    lists: [
        {
            id: 0,
            components: [1, 2, 3]
        },
        {
            id: 1,
            components: [4]
        }
    ],
    components: [
        {
            id: 1,
            type: 'button',
            options: {
                text: 'Show',
                variable: 'show_weather',
                value: 'show',
            },
        },
        {
            id: 2,
            type: 'button',
            options: {
                text: 'Hide',
                variable: 'show_weather',
                value: 'hide',
            },
        },
        {
            id: 3,
            type: 'condition',
            options: {
                variable: 'show_weather',
                value: 'show',
            },
            children: 1,
        },
        {
            id: 4,
            type: 'weather',
            options: {
                lon: VALUES.WEATHER_LOCATIONS[1].lon,
                lat: VALUES.WEATHER_LOCATIONS[1].lat,
            }
        },
    ],
};
