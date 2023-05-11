import axios from "axios";

export const fechCharacter = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
    
}