import { Element, ElementProps } from './Element'

export interface LayoutProps extends ElementProps {}

export function Layout (props: LayoutProps): any {
    return (
        <Element
            {...props}
            style={{
                margin: '1rem'
            }}
        />
    )
}
