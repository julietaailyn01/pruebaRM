import { Heading, SimpleGrid } from '@chakra-ui/react';
import { fechCharacter } from '../utils/api';
import CharacterCard from '../components/CharacterCard';
import { useQuery } from '@tanstack/react-query';


function Characters() {
  const { data: characters, isLoading, isError } = useQuery(
    {
      queryKey: ['characters'],
      queryFn: fechCharacter
    }
  );

  if (isLoading) {
    return (
      <div>
        <h1>Is Loading...</h1>
      </div>
    )
  } else if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  } else {
    return (
      <>
        <Heading as="h1" >
          Personajes
        </Heading>
        <SimpleGrid columns={[1, 2, 3]}>
          {
            characters.map((character) => (
              <div>
                <CharacterCard key={character.id} character={character} />
              </div>
            ))
          }
        </SimpleGrid>
      </>
    )
  }
}

export default Characters;
