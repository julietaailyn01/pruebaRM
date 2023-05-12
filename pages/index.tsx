import type { NextPage } from "next";
import Head from "next/head";
import Characters from "../components/Characters";
import axios from "axios";
import NavBar from "../components/Navbar";
import { useState } from 'react';


const Home: NextPage = () => {

  const[characters,setCharacters]= useState([]);
    
    function isRepetida(id) {
        let aux = false;
        characters.forEach((character) => {
            if(character.id === id) aux = true;
          });
        return aux;
        }

  const handleSearch = async (character) => {
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${character}`);
      if (data.name) {
        if(!isRepetida(data.id)){
          setCharacters(oldChars => [...oldChars, data])
          } else {
              window.alert("No podes repetir personaje");
            }
          } else {
            window.alert("No hay personaje con ese ID");
          }
        
  }catch(err){
    console.log(err);
  }
}

  const onClose = (id) =>{
    setCharacters(
      characters.filter(character => character.id !==id)
    )
  }
  return (
    <>
      <Head>
        <title>Rick and Morty App</title>
        <meta name="description" content="Rick and Morty App using Next.js, TypeScript, and Chakra UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar onSearch = {handleSearch} />
      <Characters onClose={onClose} characters={characters}/>
    </>
  );
};

export default Home;
