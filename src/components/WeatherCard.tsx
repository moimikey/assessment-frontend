import { ElementProps } from './Element'
import { Card } from './Card'
import { Grid } from './Grid'
import { Image } from './Image'
import { useStore } from '../store'
import { useEffect, useState } from 'react'
import { Weather, WeatherShort } from '../models'

export interface WeatherCardProps extends ElementProps {
    options: {
        lat: string
        lon: string
    }
}

export function WeatherCard (props: WeatherCardProps): any {
    const { children, options, ...weatherProps } = props
    const { fetchWeatherData } = useStore()
    const [weatherData, setWeather] = useState(new Weather({}).$)

    useEffect(() => {
        async function fetchData () {
            return await fetchWeatherData(options)
        }

        // console.log('fetch weather for', options)
        fetchData().then(setWeather)
    }, [setWeather, options, fetchWeatherData])

    if (!weatherData) {
        return (
            <Card style={{ height: '150px', backgroundColor: '#FFF' }} {...weatherProps}>
                <span />
            </Card>
        )
    }

    return (
        <Card style={{ height: '150px', backgroundColor: '#FFF' }} {...weatherProps}>
            <Grid
                style={{
                    width: '100%',
                    height: 'inherit',
                    gridTemplateColumns: '1fr 1fr',
                    gridAutoFlow: 'column',
                    alignItems: 'start',
                    justifyContent: 'center'
                }}
            >
                <Grid
                    style={{
                        gridTemplateColumns: '1fr 1fr',
                        gridAutoFlow: 'column',
                        height: 'inherit'
                    }}
                >
                    <Grid
                        style={{
                            padding: '1rem'
                        }}
                    >
                        <Image
                            src={`/icons/${weatherData?.condition}.svg`}
                            style={{ maxHeight: '65px' }}
                        />
                    </Grid>
                    <Grid
                        style={{
                            gridTemplateRows: 'max-content max-content',
                            alignItems: 'center',
                            gridAutoFlow: 'row',
                            padding: '1rem 0'
                        }}
                    >
                        <span style={{ fontSize: '2rem' }}>
                            {weatherData?.temperature}˚{weatherData?.unit.toUpperCase()}
                        </span>
                        <span style={{ fontSize: '0.96rem' }}>{weatherData?.conditionName}</span>
                    </Grid>
                </Grid>
                <Grid
                    style={{
                        height: 'inherit'
                    }}
                >
                    <Grid
                        style={{
                            justifyItems: 'end',
                            alignContent: 'space-between',
                            gridTemplateRows: '1fr 1fr',
                            padding: '0 1rem 1rem'
                        }}
                    >
                        <span style={{ fontSize: '0.96rem', padding: '1rem' }}>
                            {weatherData?.location}
                        </span>
                        <Grid
                            style={{
                                gridTemplateColumns: '1fr 1fr 1fr',
                                alignItems: 'end',
                                padding: '0 1rem 1rem'
                            }}
                        >
                            {weatherData?.upcomming.map((w: WeatherShort | undefined) => (
                                <Grid
                                    key={`${w?.day}-${w?.condition}`}
                                    style={{
                                        gridTemplateRows: 'max-content max-content',
                                        justifyItems: 'center'
                                    }}
                                >
                                    <Image
                                        src={`/icons/${w?.condition}.svg`}
                                        style={{ maxHeight: '2rem' }}
                                    />
                                    <span style={{ fontSize: '0.96rem' }}>{w?.day}</span>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}
