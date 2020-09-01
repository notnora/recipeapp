import React, {useEffect} from 'react'
import {SearchBar} from "./SearchBar";
import {InputBar} from './InputBar';
import { Button } from '@material-ui/core';
import IngredientList from "./IngredientList";
/*
Example responses:
 */
var recipe_search_results = require("../utils/recipe_search_respone");

export const MainWindow = props => {
    /*
        States
     */
    const [sorting, setSorting] = React.useState("ASC");
    const [recipes, setRecipes] = React.useState([]);
    const [searchWord, setSearchWord] = React.useState("");
    const [ingredientList, setIngredientList] = React.useState([]);
    useEffect(() => {
        console.log("New ingredient list: ", ingredientList);

    });
      const sortRecipesByTitle = (a, b) => {
        if (sorting === "ASC") {
          return a.title.trim().toLowerCase() > b.title.trim().toLowerCase() ? 1 : -1;
        } else {
          return a.title.trim().toLowerCase() > b.title.trim().toLowerCase() ? -1 : 1;
        }
      };
    const filterRecipes = () => {
        /*
        Filter out recipes
         */
      return recipes
          .filter(recipe => recipe.title.toLowerCase()
              .includes(searchWord.toLocaleLowerCase()))
          .sort(sortRecipesByTitle);
    };
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
    const search = searchWordItem => {
      console.log("Searched for: ", searchWordItem)
    };
    return (
        <div>
            <IngredientList
                ingredientList={ingredientList} />
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