const VALUES = require('../values');

module.exports = {
    variables: [
        {
            name: 'show_image',
            type: 'string',
            initialValue: 'hide',
        },
        {
            name: 'location',
            type: 'string',
            initialValue: 'ny',
        },
    ],
    lists: [
        {
            id: 0,
            components: [3, 4, 8, 9, 10]
        },
        {
            id: 1,
            components: [1],
        },
        {
            id: 2,
            components: [2],
        },
        {
            id: 3,
            components: [14, 11, 7, 6],
        },
        {
            id: 4,
            components: [15, 12, 5, 7],
        },
        {
            id: 5,
            components: [16, 13, 6, 5],
        },
        {
            id: 6,
            components: [17],
        },
        {
            id: 7,
            components: [18],
        },
        {
            id: 8,
            components: [19],
        },
    ],
    components: [
        {
            id: 1,
            type: 'button',
            options: {
                text: 'Show',
                variable: 'show_image',
                value: 'show',
            },
        },
        {
            id: 2,
            type: 'button',
            options: {
                text: 'Hide',
                variable: 'show_image',
                value: 'hide',
            },
        },
        {
            id: 3,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'hide',
            },
            children: 1,
        },
        {
            id: 4,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'show',
            },
            children: 2,
        },
        {
            id: 5,
            type: 'button',
            options: {
                text: 'New York',
                variable: 'location',
                value: 'ny',
            },
        },
        {
            id: 6,
            type: 'button',
            options: {
                text: 'San Francisco',
                variable: 'location',
                value: 'ca',
            },
        },
        {
            id: 7,
            type: 'button',
            options: {
                text: 'Chicago',
                variable: 'location',
                value: 'ch',
            },
        },
        {
            id: 8,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ny'
            },
            children: 3,
        },
        {
            id: 9,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ca'
            },
            children: 4,
        },
        {
            id: 10,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ch'
            },
            children: 5,
        },
        {
            id: 11,
            type: 'weather',
            options: {
                lon: VALUES.WEATHER_LOCATIONS[0].lon,
                lat: VALUES.WEATHER_LOCATIONS[0].lat,
            }
        },
        {
            id: 12,
            type: 'weather',
            options: {
                lon: VALUES.WEATHER_LOCATIONS[1].lon,
                lat: VALUES.WEATHER_LOCATIONS[1].lat,
            }
        },
        {
            id: 13,
            type: 'weather',
            options: {
                lon: VALUES.WEATHER_LOCATIONS[2].lon,
                lat: VALUES.WEATHER_LOCATIONS[2].lat,
            }
        },
        {
            id: 14,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'show',
            },
            children: 6,
        },
        {
            id: 15,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'show',
            },
            children: 7,
        },
        {
            id: 16,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'show',
            },
            children: 8,
        },
        {
            id: 17,
            type: 'image',
            options: VALUES.IMAGES[0],
        },
        {
            id: 18,
            type: 'image',
            options: VALUES.IMAGES[1],
        },
        {
            id: 19,
            type: 'image',
            options: VALUES.IMAGES[2],
        },
    ],
};
