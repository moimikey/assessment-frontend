import { Element, ElementProps } from './Element'

export interface CardListProps extends ElementProps {}

export function CardList (props: CardListProps): any {
    return (
        <Element
            {...props}
            style={{
                display: 'grid',
                gridGap: '1rem'
            }}
        />
    )
}
