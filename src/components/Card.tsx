import { Element, ElementProps } from './Element'

export interface CardProps extends ElementProps {
    options?: { [k: string]: any }
}

export function Card (props: CardProps): any {
    const { options, ...cardProps } = props
    const backgroundImage = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundImage: `url(${options?.src})`,
        backgroundSize: 'cover',
        backgroundColor: '#3D73E8'
    }
    return (
        <Element
            {...cardProps}
            style={{
                display: 'block',
                width: '300px',
                height: '150px',
                border: '1px solid #DDD',
                borderRadius: '1rem',
                overflow: 'hidden',
                ...(options?.src ? { ...backgroundImage } : { backgroundColor: '#FFF' }),
                ...props.style
            }}
        />
    )
}
