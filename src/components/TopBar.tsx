import {useState} from "react";
import BeuniLogo from "../beuni-logo.png"
import styles from "./TopBar.module.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";

function TopBar() {

    let [query, setQuery] = useState('');

    function removeDiacritics(text: string) {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    return (
        <header className={styles.barContainer}>
            <Link to={{pathname: "/"}} onClick={() => setQuery('')}>
                <img className={styles.logo} src={BeuniLogo} alt="Company logo" width={146} height={44}/>
            </Link>
            <form className={styles.formContainer} onSubmit={(event) => event.preventDefault()}>
                <input className={styles.formInput} type="text" name="product-query"
                       placeholder="Pesquise por um produto" value={query}
                       onChange={(event) => setQuery(event.target.value)}/>
                <Link to={{pathname: "/search", search: `?name=${removeDiacritics(query)}`}}>
                    <IconButton className={styles.formBtn} type="submit">
                        <SearchSharpIcon className={styles.form_btn}/>
                    </IconButton>
                </Link>
            </form>
        </header>
    )

}


export default TopBar;