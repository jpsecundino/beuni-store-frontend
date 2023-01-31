import { useState } from "react";
import BeuniLogo from "../beuni-logo.png"
import "./TopBar.css";
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
        <header className="bar-container">
            <Link to={{pathname: "/"}}>
                <img className="logo" src={BeuniLogo} alt="Company logo" width={146} height={44} />
            </Link>
            <form className="form-container" onSubmit={(event) => event.preventDefault()}>
                <input className="form-input" type="text" name="product-query" placeholder="Pesquise por um produto" value={query} onChange={(event) => setQuery(event.target.value) } />
                <Link to={{pathname: "/search", search: `?name=${query}`}} >
                    <IconButton className="form-btn" type="submit" onClick={() => onQuery(query)}>
                        <SearchSharpIcon className="form-btn"/>
                        </IconButton>
                </Link>
            </form>
        </header>
    )
    
}


export default TopBar;