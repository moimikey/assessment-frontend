import { Element, ElementProps } from './Element'

export interface BoxProps extends ElementProps {}

export function Box (props: BoxProps): any {
    return <Element {...props} as='div' />
}
