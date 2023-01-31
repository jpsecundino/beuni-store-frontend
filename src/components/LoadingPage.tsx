import { Loader } from "semantic-ui-react";
import styles from "./LoadingPage.module.css"

type LoadingPageProps = {
    text: string
}

function LoadingPage(props: LoadingPageProps) {
    return (
        <Loader size="massive" className={styles.loadingPage}>
            {props.text}
        </Loader>
    )
}

export default LoadingPage;