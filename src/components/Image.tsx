import { ElementProps } from './Element'

export interface ImageProps extends ElementProps {
    src: string
    options?: { [k: string]: any }
}

export function Image (props: ImageProps): any {
    const { children, options, ...imageProps } = props
    return <img {...imageProps} {...JSON.parse(JSON.stringify(props.options || {}))} />
}
