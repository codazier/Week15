import React from "react";

export const NewAbilityForm = (props) => {
const [ability, setAbility] = React.useState('');

const onSubmit =(e) => {
    e.preventDefault();
    if(ability) {
        props.addNewAbility({ability});
        setAbility('');
    } else {
        console.log('I am Groot');
    }
 };

 return (
    <div>
            <h4> Add a new ability</h4>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                placeholder="ability"
                onChange={(e) => setAbility(e.target.value)}
                value={ability}
                />
                <button type='submit'>Add ability</button>
            </form>
    </div>
 )
 };