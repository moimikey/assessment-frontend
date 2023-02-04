import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useParams } from 'react-router-dom'
import { useStore } from './store'
import { CardList } from './components/CardList'
import { Card } from './components/Card'
import { WeatherCard } from './components/WeatherCard'
import { List } from './models'
import { Grid } from './components/Grid'
import { Box } from './components/Box'

export const Page = observer(() => {
    const { id } = useParams<{ id: string }>()
    const { lists, fetchPageProps, fetchWeatherData, weatherData, variables } = useStore()

    useEffect(() => {
        async function fetchData () {
            return await fetchPageProps(id ?? 'page-one')
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function fetchData () {
            if (!weatherData) return
            return await fetchWeatherData(weatherData)
        }
        fetchData()
    }, [])

    return (
        <React.Fragment>
            <CardList>
                {lists.map((list: List) => {
                    const components = list.$.components
                    return components.map((component: any) => {
                        const options = component.options
                        switch (component.type) {
                            // @ts-expect-error
                            case 'condition': {
                                if (
                                    options.value !==
                                    variables.find((v: any) => v.initialValue === options.value)
                                ) {
                                    return
                                }
                            }
                            case 'image':
                                return (
                                    <Card
                                        key={`card-${component.type}-${component.id}`}
                                        options={options}
                                    />
                                )
                            case 'weather':
                                return (
                                    <WeatherCard
                                        key={`card-${component.type}-${component.id}`}
                                        options={{ lat: options.lat, lon: options.lon }}
                                    />
                                )
                            case 'button':
                                const { text, variable, value } = component.options
                                return (
                                    <Card
                                        key={`card-${component.type}-${component.id}`}
                                        data-variable={variable}
                                        data-value={value}
                                        style={{
                                            backgroundColor: '#3D73E8',
                                            color: '#FFF',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Grid
                                            style={{
                                                gridTemplateColumns: '1fr 1fr',

                                                height: '100%'
                                            }}
                                        >
                                            <Box
                                                style={{
                                                    padding: '1rem'
                                                }}
                                            >
                                                {text}
                                            </Box>
                                            <Box
                                                style={{
                                                    padding: '1rem',
                                                    display: 'grid',
                                                    textAlign: 'right',
                                                    alignSelf: 'end'
                                                }}
                                            >
                                                {/* <Image src={`/icons/`} /> */}ICON
                                            </Box>
                                        </Grid>
                                    </Card>
                                )
                            default:
                                return null
                        }
                    })
                })}
            </CardList>
        </React.Fragment>
    )
})
