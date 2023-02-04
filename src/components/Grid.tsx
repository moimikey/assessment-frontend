import { Element, ElementProps } from './Element'

export interface GridProps extends ElementProps {}

export function Grid (props: GridProps): any {
    return <Element {...props} style={{ display: 'grid', ...props.style }} />
}
