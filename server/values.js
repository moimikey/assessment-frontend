module.exports.WEATHER_LOCATIONS = [
    {
        lon: '40.748607102729295',
        lat: '-73.98563758004718',
        condition: 'cloudy',
        conditionName: 'Cloudy',
        temperature: 78,
        unit: 'f',
        location: 'New York, NY',
        upcomming: [
            {
                day: 'Fri',
                condition: 'cloudy',
                conditionName: 'Cloudy',
            },
            {
                day: 'Sat',
                condition: 'cloudy',
                conditionName: 'Cloudy',
            },
            {
                day: 'Sun',
                condition: 'rain',
                conditionName: 'Rain',
            },
        ],
    },
    {
        lon: '37.82012350797623',
        lat: '-122.47822291578807',
        condition: 'clear-day',
        conditionName: 'Clear',
        temperature: 75,
        unit: 'f',
        location: 'San Francisco, CA',
        upcomming: [
            {
                day: 'Fri',
                condition: 'cloudy',
                conditionName: 'Cloudy',
            },
            {
                day: 'Sat',
                condition: 'clear-day',
                conditionName: 'Clear',
            },
            {
                day: 'Sun',
                condition: 'rain',
                conditionName: 'Rain',
            },
        ],
    },
    {
        lon: '-33.85657055046214',
        lat: '151.21533961293326',
        condition: 'rain',
        conditionName: 'Rain',
        temperature: 20,
        unit: 'c',
        location: 'Chicago, IL',
        upcomming: [
            {
                day: 'Fri',
                condition: 'rain',
                conditionName: 'Rain',
            },
            {
                day: 'Sat',
                condition: 'clear-day',
                conditionName: 'Clear',
            },
            {
                day: 'Sun',
                condition: 'clear-day',
                conditionName: 'Clear',
            },
        ],
    },
];

module.exports.IMAGES = [
    {
        src: '/locations/new-york.png',
        alt: 'Cartoon of New York skyline',
    },
    {
        src: '/locations/san-francisco.png',
        alt: 'Cartoon of San Francisco skyline',
    },
    {
        src: '/locations/chicago.png',
        alt: 'Cartoon of Chicago skyline',
    },
]
