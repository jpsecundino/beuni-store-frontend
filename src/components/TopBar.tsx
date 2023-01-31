import { useState } from "react";
import BeuniLogo from "../beuni-logo.png"
import styles from "./TopBar.module.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

type TopBarProps = {
    onQuery: Function
};

function TopBar(props: TopBarProps) {
    
    let [query, setQuery] = useState('');
    let { onQuery } = props;

    return (
        <header className={styles.barContainer}>
            <Link to={{pathname: "/"}} onClick={() => setQuery('')} >
                <img className={styles.logo} src={BeuniLogo} alt="Company logo" width={146} height={44} />
            </Link>
            <form className={styles.formContainer} onSubmit={(event) => event.preventDefault()}>
                <input className={styles.formInput} type="text" name="product-query" placeholder="Pesquise por um produto" value={query} onChange={(event) => setQuery(event.target.value) } />
                <Link to={{pathname: "/search", search: `?name=${query}`}} >
                    <IconButton className={styles.formBtn} type="submit" onClick={() => onQuery(query)}>
                        <SearchSharpIcon className={styles.form_btn}/>
                        </IconButton>
                </Link>
            </form>
        </header>
    )
    
}


export default TopBar;