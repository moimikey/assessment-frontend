import React, { CSSProperties } from 'react'

export interface ElementProps {
    as?: string
    children?: React.ReactNode
    component?: React.Component<any, any>
    css?: string
    margin?: string
    ref?: React.Ref<any>
    style?: CSSProperties
    theme?: string
    variant?: string
}

/**
 * Generic `Element` component
 *
 * @param props ElementProps
 * @returns Element
 */
export function Element (props: ElementProps) {
    const {
        as = 'div',
        children,
        component,
        css,
        margin,
        ref,
        style = {},
        theme,
        variant,
        ...elementProps
    } = props

    if (component) {
        const ElementComponent: React.ComponentPropsWithRef<any> = component
        return (
            <ElementComponent
                {...(style && { style })}
                {...(css && { css: JSON.stringify(css) })}
                {...(ref && { ref })}
                {...elementProps}
            >
                {children}
            </ElementComponent>
        )
    }

    if (as) {
        const ElementComponent: React.ComponentPropsWithRef<any> = as
        return (
            <ElementComponent
                {...(style && { style })}
                {...(css && { css: JSON.stringify(css) })}
                {...(ref && { ref })}
                {...elementProps}
            >
                {children}
            </ElementComponent>
        )
    }

    return <div {...(style && { style })} {...(css && { css })} ref={ref} {...elementProps} />
}
