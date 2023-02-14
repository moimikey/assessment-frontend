import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useParams } from 'react-router-dom'
import { useStore } from './store'
import { CardList } from './components/CardList'
import { Card } from './components/Card'
import { WeatherCard } from './components/WeatherCard'
import { Grid } from './components/Grid'
import { Box } from './components/Box'
import { Component, ComponentOptions, List, Variable } from './models'
import { getVariableByName } from './utils'

const mapOverComponents = ({
    activeListId,
    setActiveListId,
    componentCondition,
    components,
    list,
    variables
}: {
    activeListId: number
    setActiveListId: (id: number) => void
    componentCondition?: any
    components: Component[]
    list: List
    variables: Variable[]
}): any => {
    return list.components.map((component: ComponentOptions) => {
        // console.log('COMPONENT', component)

        // console.log(component)
        // const clonedComponent = getComponentById(components, component_.id)
        // const component = clonedComponent && clone(clonedComponent)
        // const weatherVariable = getVariableByName(variables, 'show_weather')

        // console.log('weather variable', weatherVariable?.value || weatherVariable?.initialValue)

        // const showWeather =
        //     weatherVariable?.value === 'show' || weatherVariable?.initialValue === 'show'

        // const childComponent =
        //     component?.children && getComponentById(components, component.children)

        // if (
        //     component?.options.variable === weatherVariable?.name &&
        //     component?.options.value === 'hide'
        // ) {
        //     return null
        // }

        // if (childComponent) {
        //     return JSON.stringify(childComponent)
        // }

        switch (component?.type) {
            // location display image
            case 'image':
                // console.log('IMAGE! ---- ', JSON.stringify(component.$))
                // const isImageVisible = showLocation?.value || showLocation?.initialValue
                // (currentLocation?.value || currentLocation?.initialValue)
                // console.log(showLocation?.value || showLocation?.initialValue)
                // console.log(currentLocation?.value || currentLocation?.initialValue)
                // console.log(JSON.stringify(component.options))

                const isImageVisible = true

                return (
                    isImageVisible && (
                        <Card
                            key={`card-${component.type}-${component.id}`}
                            options={{ src: component.options.src, alt: component.options.alt }}
                        />
                    )
                )

            // weather forecase
            case 'weather':
                const isWeatherVisible = true
                return (
                    isWeatherVisible && (
                        <WeatherCard
                            key={`card-${component.type}-${component.id}`}
                            options={{ lat: component.options.lat, lon: component.options.lon }}
                        />
                    )
                )

            // show & hide button
            case 'button':
                const shouldDisplayHideButton =
                    getVariableByName(variables, 'show_weather')?.value !== 'show' ||
                    getVariableByName(variables, 'show_weather')?.initialValue !== 'show'

                const shouldDisplayShowButton =
                    component.options.variable === 'show_weather' &&
                    component.options.value === 'show'

                const isButtonVisible = shouldDisplayShowButton && shouldDisplayHideButton

                return (
                    isButtonVisible && (
                        <Card
                            key={`card-${component.type}-${component.id}-${component.options.variable}`}
                            // data-variable={variable}
                            // data-value={value}
                            style={{
                                backgroundColor: '#3D73E8',
                                color: '#FFF',
                                cursor: 'pointer'
                            }}
                            onClick={() => {}}
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
                                    {component.options.text}
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
                )
            default:
                return null
        }
    })
}

const mapOverList = ({
    activeListId,
    setActiveListId,
    componentCondition,
    components,
    lists,
    variables
}: {
    activeListId: number
    setActiveListId: (id: number) => void
    componentCondition?: any
    components: Component[]
    lists: List[]
    variables: Variable[]
}) => {
    return lists.map((list: List) => {
        return mapOverComponents({
            activeListId,
            setActiveListId,
            componentCondition,
            components,
            list,
            variables
        })
    })
}

export const Page = observer(() => {
    const { id } = useParams<{ id: string }>()
    const { activeListId, setActiveListId, components, fetchPageProps, lists, variables } =
        useStore()

    useEffect(() => {
        async function fetchData () {
            return await fetchPageProps(id ?? 'page-one')
        }
        fetchData()
    }, [fetchPageProps, id])

    const cardList = mapOverList({ activeListId, setActiveListId, components, lists, variables })

    // with memoization:
    // -------------------------
    // const cardList = useMemo(
    //     () => mapOverList({ activeListId, setActiveListId, components, lists, variables }),
    //     [components, lists, variables, activeListId, setActiveListId]
    // )

    return (
        <React.Fragment>
            <CardList>{cardList}</CardList>
        </React.Fragment>
    )
})
