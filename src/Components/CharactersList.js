import React from 'react'
import {Character} from './Character'
import { charactersApi} from './CharactersApi'

export class CharactersList extends React.Component {
    state ={
        characters : []
    };

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        const characters = await charactersApi.get();
        this.setState({characters});
    }

    updateCharacter = async (updatedCharacter) => {
        await charactersApi.updateCharacter(updatedCharacter);
        this.fetchCharacters();
    }

    render() {
        return (
            <div className="character-list">
                {this.state.characters.map((character) => (
                    <Character
                        character={character}
                        key={character._id}
                        updateCharacter={this.updateCharacter}
                    />
                ))}
            </div>
        )
    }
}