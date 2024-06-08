import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();

    return(
        <div className="flex items-center justify-center flex-col">
            <h1>Nothing to see here...</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}