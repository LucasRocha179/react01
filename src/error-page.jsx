import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Desculpe, a página não foi encontrada!.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}