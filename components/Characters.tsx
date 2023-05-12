import CharacterCard from '../components/CharacterCard';
import { Box, Heading } from "@chakra-ui/react";


function Characters({characters , onClose}) {
    return( 
        <Box p={4}>
        <Heading as="h2" mb={4}>Cards</Heading>
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {characters.map(({ id, name, species, gender, image }) => (
            <CharacterCard
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              key={id}
              onClose={() => onClose(id)}
            />
          ))}
        </Box>
      </Box>
    );
  };

export default Characters
