import React from 'react'
import {SearchBar} from "./SearchBar";

export const MainWindow = props => {
    /*
        States
     */
    const [searchWord, setSearchWord] = React.useState("");

    const searchRecipe = word => {
        setSearchWord(word);
        console.log("Searchword: ", word)
    };
    return (
        <SearchBar
        search = {searchRecipe}/>
    );
};
export default MainWindow;