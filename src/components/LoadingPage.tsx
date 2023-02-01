import {Loader} from "semantic-ui-react";
import styles from "./LoadingPage.module.css"

type LoadingPageProps = {
    text: string
}

/**
 * Shows a loading message to the user while some operation is running
 */
function LoadingPage(props: LoadingPageProps) {
    return (
        <Loader size="massive" className={styles.loadingPage}>
            {props.text}
        </Loader>
    )
}

export default LoadingPage;