import { useState } from 'react';
// import { IconName } from "react-icons/fa";
import Link from "next/link";
import { Flex, FormControl, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';


export default function Nav({onSearch}){
    const[character,setCharacter]=useState("")

   const HandleChange = (event )=>{
      setCharacter(event.target.value)
   }
    return(
        <nav>
        <Flex alignItems="center">
          <Link href="/"> Logout</Link>
          <Link href="/Home"> Home</Link>
          <Link href="/Favorites"> Favorites</Link>
          <Link href="/About"> About Me</Link>
          <a href="https://github.com/julietaailyn01" target="blank">GitHub</a>
        </Flex>
      
        <FormControl>
          <InputGroup size="md">
            <Input
              type="search"
              placeholder="Search for ID"
              value={character}
              onChange={HandleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => onSearch(character)}>
                Add
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </nav>
      
    )
}