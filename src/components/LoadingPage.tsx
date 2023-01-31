import { Loader } from "semantic-ui-react";
import "./LoadingPage.css"

type LoadingPageProps = {
    text: string
}

function LoadingPage(props: LoadingPageProps) {
    return (
        <Loader size="massive" className="loading-page">
            {props.text}
        </Loader>
    )
}

export default LoadingPage;