import React from "react";
import {TextField} from "@material-ui/core";

export const InputBar = props => {

    const [inputValue, setInputValue] = React.useState("");
    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            let ingredient = event.target.value;
            console.log('InputEnter: ', ingredient);
            props.addIngredient(ingredient);
            setInputValue(inputValue => []);
        }
    };
    const handleChange = event => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <TextField
                id="inputbar"
                label='Add Ingredient'
                type="text"
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                value={inputValue}/>

        </div>
    );
};
export default InputBar;