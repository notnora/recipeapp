import React, {useEffect} from 'react'
import {SearchBar} from "./SearchBar";
import {InputBar} from './InputBar';
import { Button } from '@material-ui/core';
import IngredientList from "./IngredientList";
import RecipeList from "./RecipeList";
/*
Example responses:
 */


export const MainWindow = props => {
    /*
        States
     */
    var recipe_search_results = require("../utils/recipe_search_respone");
    const [sorting, setSorting] = React.useState("ASC");
    const [recipeList, setRecipeList] = React.useState([]);
    useEffect(()=>{
        console.log("New Recipe list: ", recipeList);
    });
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

      const filterRecipes = (word, recipe_collection) => {

      var recs = recipe_collection.recipes
          .filter(recipe => recipe.title.toLowerCase()
              .includes(word.toLocaleLowerCase()))
          .sort(sortRecipesByTitle);
      console.log(recs);
      return recs;
    };

    const addRecipeToList = recipe => {
      setRecipeList(recipes => [...recipes, recipe]);
      console.log('added recipe: ', recipe.title);
    };
    const searchRecipe = word => {
        setSearchWord(word);
        console.log("Searchword: ", word);
        let recipe_example_db = require("../utils/30_random_recipe");
        var match_recipes = filterRecipes(word, recipe_example_db);
        match_recipes.map(recipe => (
            addRecipeToList(recipe)
        ));
        console.log("matches: ", match_recipes)

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
            <RecipeList
                recipeList={recipeList}
            />


        </div>

    );
};
export default MainWindow;