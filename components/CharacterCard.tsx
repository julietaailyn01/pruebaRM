import { Box, Image, Badge } from '@chakra-ui/react';
import { Character } from '../types/types';

type CharacterCardProps = {
    character: Character;
};

function CharacterCard ({character}: CharacterCardProps){
    return(
        <Box>
            <Image src={character.image} alt={character.name}/>
            <Box>
                <Box>
                    <Badge>
                        {character.species}
                    </Badge>
                    <Box>
                        {character.status}
                    </Box>
                </Box>

                <Box>
                    {character.name}
                </Box>
                <Box>
                    {character.location.name}
                </Box>
            </Box>
        </Box>
    )
}

export default CharacterCard;