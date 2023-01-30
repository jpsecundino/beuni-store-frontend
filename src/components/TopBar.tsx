import { useState } from "react";
import BeuniLogo from "../beuni-logo.png"
import "./TopBar.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import IconButton from '@mui/material/IconButton';

type TopBarProps = {
    onQuery: Function
};

function TopBar(props: TopBarProps) {
    
    let [query, setQuery] = useState('');
    let { onQuery } = props;

    return (
        <header className="bar-container">
            <img className="logo" src={BeuniLogo} alt="Company logo" width={146} height={44} />
            <form className="form-container" onSubmit={(event) => event.preventDefault()}>
                <input className="form-input" type="text" name="product-query" placeholder="Pesquise por um produto" value={query} onChange={(event) => setQuery(event.target.value) } />
                <IconButton className="form-btn" type="submit" onClick={() => onQuery(query)}>
                    <SearchSharpIcon className="form-btn"/>
                </IconButton>
            </form>
        </header>
    )
    
}


export default TopBar;