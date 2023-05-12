import { useState } from 'react';
// import { IconName } from "react-icons/fa";
import { Flex, Box, Link, Button, Input, InputGroup, InputRightElement, FormControl } from "@chakra-ui/react";
import { FaGithub } from 'react-icons/fa';



export default function Nav({onSearch}){
    const[character,setCharacter]=useState("")

   const HandleChange = (event )=>{
      setCharacter(event.target.value)
   }
    return(
        <Box
  position="fixed"
  left={0}
  top={0}
  width="15rem"
  height="100%"
  bg="#1A202C"
  color="white"
  padding="1rem"
  fontFamily="Roboto"
>
  <Flex alignItems="center" mb={4}>
    <a href="https://github.com/julietaailyn01/pruebaRM" target="_blank">
    <FaGithub size={32} color="#fff" /> GitHub
    </a>
  </Flex>

  <FormControl>
    <InputGroup size="md">
      <Input
        type="search"
        placeholder="Buscar por id"
        value={character}
        onChange={HandleChange}
      />
      <InputRightElement width="4.5rem">
      <Button bg="#1A202C" h="1.75rem" size="sm" colorScheme="teal" _hover={{bg: "#39FF14", color: "black"}} onClick={() => onSearch(character)}>
  Buscar
</Button>


      </InputRightElement>
    </InputGroup>
  </FormControl>
</Box>
      );
}