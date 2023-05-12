import { Box, Image, Text, IconButton, Flex } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const CharacterCard = (props) => {

    
  return (
    <Box
  w="250px"
  borderRadius="md"
  overflow="hidden"
  boxShadow="md"
  border="2px solid #000"
  transition="all 0.2s ease-in-out"
  _hover={{
    boxShadow: "0px 2px 4px rgba(57, 255, 20, 0.5)",
    borderColor: "#39FF14",
    ".text": {
      color: "#39FF14"
    },
    ".iconButton": {
      color: "#39FF14"
    }
  }}
>
  <Image src={props.image} alt={props.name} h="250px" w="100%" objectFit="cover" />
  <Box p={4} borderBottom="1px solid #000">
    <Text fontSize="lg" fontWeight="bold" color="#000" mb={2} className="text">
      {props.name}
    </Text>
    <Text fontSize="md" mb={2}>
      Especie: {props.species}
    </Text>
    <Text fontSize="md" mb={2}>
      Genero: {props.gender}
    </Text>
    <IconButton
      aria-label="borrar character"
      icon={<FaTrash />}
      onClick={props.onClose}
      color="#000"
      className="iconButton"
    />
  </Box>
</Box>


  );
};

export default CharacterCard;
