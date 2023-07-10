import React from 'react'
import { NewAbilityForm} from './NewAbilityForm'; 

export const Character =(props) => {
    const { character, updateCharacter} = props;
    const deleteAbility = (abilityId) => {
        const updatedCharacter = {
        ...character,
        abilities: character.abilities.filter((x) => x._id !==abilityId)
        };
        updateCharacter(updatedCharacter);
    }


    const addNewAbility = (ability) => updateCharacter({...character, abilities:[...character.abilities, ability]});

    const renderAbilities =() => (
        <ul>
            {character.abilities.map((ability, index) => (
        <li key={index}>
            <label> {`${ability.name}`}</label>
            <button onClick={(e) => deleteAbility(ability._id)}> Delete</button>
        </li>
        ))}
        </ul>
    )

return (
    <div>
        <h1>{character.name}</h1>
        {
        renderAbilities(
            <NewAbilityForm addNewAbility={addNewAbility} />
        
        )
}
    </div>
);

};

// abilities, characterId: character._id, deleteAbility})