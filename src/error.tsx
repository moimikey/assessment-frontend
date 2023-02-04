import { useRouteError } from 'react-router-dom'

export default function Error () {
    const error: any = useRouteError()

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <em>{error?.statusText || error?.message}</em>
            </p>
        </div>
    )
}
