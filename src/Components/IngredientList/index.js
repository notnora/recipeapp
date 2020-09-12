import React from "react";
import {List} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import {Divider} from "@material-ui/core";

export const IngredientList = props => {
    /**
     * Renders a list of all the ingredients currently contained in the "IngredientList".
     * Each list item gets its own key which is a combination of the ingredient name and a random generated number
     *
     * @component
     **/
    return (
        <div className="inglist">
            <List>
                <ListItem>
                    <ListItemText primary="Ingredients"/>
                </ListItem>
                <Divider/>
                {props.ingredientList.map(ingredient => (
                    <ListItem
                    key={ingredient + Math.random()} >
                        <ListItemText
                            primary ={ingredient}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};
export default IngredientList;