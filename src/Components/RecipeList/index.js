import {React} from "react";
import {List} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {Divider}from "@material-ui/core";
export const RecipeList = props => {
    console.log(props)
    return(
        <div classname="RecipeListItem">
            <List>
                <ListItem>
                    <ListItemText
                        key="recipeListTitle"
                        rimary="Suggested recipes"/>
                </ListItem>
                <Divider/>
                {props.recipeList.map(recipe => (
                    <ListItem button>
                        <ListItemText
                            key={recipe.id}
                            primary={recipe.title}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};
export default RecipeList;