import React, {useEffect} from 'react'
import {SearchBar} from "./SearchBar";
import {InputBar} from './InputBar';
import { Button } from '@material-ui/core';

export const MainWindow = props => {
    /*
        States
     */
    const [searchWord, setSearchWord] = React.useState("");
    const [ingredientList, setIngredientList] = React.useState([]);
    useEffect(() => {
        console.log("New ingredient list: ", ingredientList);

    });

    const searchRecipe = word => {
        setSearchWord(word);
        console.log("Searchword: ", word)
    };
    const addIngredientToList = ingredient => {
        setIngredientList(ingredients =>[...ingredients, ingredient]);
        console.log("Added: ", ingredient);
    };
    const resetIngredients = () => {
        setIngredientList(ingredientList => []);
    };
    return (
        <div>
            <SearchBar
                search = {searchRecipe}/>
            <InputBar
                ingredients={ingredientList}
                addIngredient = {addIngredientToList}/>
            <Button
                onClick ={resetIngredients}
                variant="contained"
                color="primary">
                Reset ingredients
            </Button>


        </div>

    );
};
export default MainWindow;