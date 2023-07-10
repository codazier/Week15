import React from 'react'

const CHARACTERS_ENDPOINT = "https://64aca29f9edb4181202fab3f.mockapi.io/characters";


class CharactersApi {
    get = async () => {
        try {
            const resp = await fetch(CHARACTERS_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('I am Groot. Rocket- He says it looks like something went wrong', e)
        }
    }

put = async (character) => {
    try {
        const resp =await fetch(`${CHARACTERS_ENDPOINT}/${character._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        });
            return await resp.json();
    } catch(e) {
        console.log('I am Groot. Rocket- He says your character update failed.',e);
    }
}
}

export const charactersApi = new CharactersApi();
   // constructor{props} {
       //super(props);
        //this.addNewCharacter=this.addNewCharacter.bind(this);
       //this.deleteCharacter=this.deleteCharacter.bind(this);
   // }
