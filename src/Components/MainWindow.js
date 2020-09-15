import React, {useEffect} from 'react'
import {SearchBar} from "./SearchBar";
import {InputBar} from './InputBar';
import { Button } from '@material-ui/core';
import IngredientList from "./IngredientList";
import RecipeList from "./RecipeList";
import Header from "./Header";
import "./style.css"
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
        /**
         * Sorts the a and b based on ascending or descending order.
         * a and b must be a recipe-object
         * @param   {JSON}  a    The first object to compare
         * @param   {JSON}  b    The  second object to compare
         * @return  {Int}        ASC: 1 if a is greater, -1 if not. DESC: opposite of ASC
         */
        if (sorting === "ASC") {
          return a.title.trim().toLowerCase() > b.title.trim().toLowerCase() ? 1 : -1;
        } else {
          return a.title.trim().toLowerCase() > b.title.trim().toLowerCase() ? -1 : 1;
        }
      };

    const filterRecipes = (word, recipe_collection) => {
        /**
         * Filters the recipe list based on if it contains the word or not
         *
         * @param   {String}  word                The word to match
         * @param   {Array}   recipe_collection   The list of recipe-objects to be matched.
         * @return  {Array}                      A list of the matching recipes
         */
      var recs = recipe_collection.recipes
          .filter(recipe => recipe.title.toLowerCase()
              .includes(word.toLocaleLowerCase()))
          .sort(sortRecipesByTitle);
      console.log(recs);
      return recs;
    };

    const addRecipeToList = recipe => {
        /**
         * Adds a recipe object to the recipe-list
         * @param   {JSON}  recipe     The recipe to be added to the list
         * @return                      null
         */
        setRecipeList(recipes => [...recipes, recipe]);
        console.log('added recipe: ', recipe.title);
    };
    const searchRecipe = word => {
        /**
         * WIP (Work in Progress)
         * Search through the recipe-collection
         * for a title that matches the word
         *
         * @param   {String}    word    The search word to match
         * @return                      Null
         */
        setSearchWord(word); // Set the search word-state
        console.log("Searchword: ", word); // Debug
        let recipe_example_db = require("../utils/30_random_recipe"); // Load the recipe-collection. Will be an api-call
        var match_recipes = filterRecipes(word, recipe_example_db); // get the matching recipes
        if(match_recipes !== null){
            // Removes the existing recipes if there is a match
            resetRecipes();
        }
        match_recipes.map(recipe => (
            addRecipeToList(recipe)
        ));
        console.log("matches: ", match_recipes)

    };
    const addIngredientToList = ingredient => {
        /**
         * Adds the specified ingredient to the list of ingredients.
         * @param   {String}    ingredient    The ingredient to add
         * @return                            null
         */
        setIngredientList(ingredients =>[...ingredients, ingredient]);
        console.log("Added: ", ingredient);
    };
    const resetIngredients = () => {
        /**
         * Reset the ingredient list to be empty
         * @return  Null
         */
        setIngredientList(ingredientList => []);
    };
    const resetRecipes = () => {
        /**
         * Reset recipe list to be empty
         * @return Null
         */

        setRecipeList(recipeList => []);
    };

    return (
        <div className="mainWindow">
            <div>
                <Header/>
            </div>
            <div className="search">
                <SearchBar
                    search = {searchRecipe}/>
                <InputBar
                    ingredients={ingredientList}
                    addIngredient = {addIngredientToList}/>
            </div>
            <div className="buttons">
                <Button
                    onClick ={resetRecipes}
                    variant="contained"
                    color="secondary">
                    Reset Recipes
                </Button>
                <Button
                    onClick ={resetIngredients}
                    variant="contained"
                    color="secondary">
                    Reset ingredients
                </Button>
            </div>
            <div className="Lists">
                <IngredientList
                    ingredientList={ingredientList} />
                <RecipeList
                    recipeList={recipeList}
                />
            </div>



        </div>

    );
};
export default MainWindow;