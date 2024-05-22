import { useState, useEffect } from "react";

function consultaPersonagens(){
    const [listaPersonagens, setListaPersonagens] = useState();

    useEffect(() => {

        console.log('Consultar Personagens');

        fetch('https://rickandmortyapi.com/api/character')
        .then((resposta) => {
            return resposta.json();
        })
        .then((resultadoConsulta) => {
            setPersonagens(resultadoConsulta.results);
        });
    }, []);

    return <>
        <h3>{personagem.id}</h3>
        <h3>{personagem.name}</h3>
        <h3>{personagem.status}</h3>
        <h3>{personagem.species}</h3>
        <h3>{personagem.type}</h3>
        <h3>{personagem.gender}</h3>
        <h3>{personagem.origin}</h3>
        <h3>{personagem.location}</h3>
        <h3>{personagem.image}</h3>
        <h3>{personagem.episode}</h3>
        <h3>{personagem.url}</h3>
        <h3>{personagem.created}</h3>
    </>
}

export default consultaPersonagens;