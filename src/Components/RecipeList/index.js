import React from "react";
import {List} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {Divider}from "@material-ui/core";

export const RecipeList = props => {
    /**
     * WIP
     * A list of recipe titles.
     * These titles will eventually be able to expand and show the whole recipe
     *
     * @component
     */
    console.log("RECIPELIST: ", props.recipeList);
    if (props.recipeList.length === 0){
        console.log("0");
        return (
            <div className="RecipeListItem">
                <List>
                    <ListItem
                        key="recipeListTitle">
                        <ListItemText
                            primary="Suggested recipes"/>
                    </ListItem>
                </List>
            </div>
        );
    }
    else{
        console.log(props);
        return(
            <div className="RecipeListItem">
                <List>
                    <ListItem
                        key="recipeListTitle">
                        <ListItemText
                            key="recipeListTitle"
                            primary="Suggested recipes"/>
                    </ListItem>
                    <Divider/>
                    {props.recipeList.map(recipe => (
                        <ListItem button key={recipe.id}>
                            <ListItemText
                                primary={recipe.title}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }

};
export default RecipeList;