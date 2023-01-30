import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import BeuniLogo from "../beuni-logo.png"

type TopBarProps = {
    onQuery: Function
};

function TopBar(props: TopBarProps) {
    
    let [query, setQuery] = useState('');
    let { onQuery } = props;

    return (
        <AppBar position='sticky'>
        <img src={BeuniLogo} alt="Company logo" width={146}></img>
        <form onSubmit={(event) => event.preventDefault()}>
        <label>
            Product name:
                <input type="text" name="name" value={query} onChange={(event) => setQuery(event.target.value) } />
            </label>
            <input type="submit" value="Submit" onClick={() => onQuery(query)} />
        </form>
    </AppBar>
    )
    
}


export default TopBar;