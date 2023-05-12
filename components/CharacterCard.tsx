import { Box, Image, Text, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const CharacterCard = (props) => {
  return (
    <Box w="200px" boxShadow="md" borderRadius="md" overflow="hidden">
      <Image src={props.image} alt={props.name} h="250px" w="100%" objectFit="cover" />
      <Box p={4}>
        <Text fontSize="lg" fontWeight="bold">
          {props.name}
        </Text>
        <Text mt={2} fontSize="md">
          {props.species} - {props.gender}
        </Text>
        <IconButton
          aria-label="borrar character"
          icon={<FaTrash />}
          mt={2}
          onClick={props.on}
        />
      </Box>
    </Box>
  );
};

export default CharacterCard;
