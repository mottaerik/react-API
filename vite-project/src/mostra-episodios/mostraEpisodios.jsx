import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function mostraEpisidios() {
    const params = useParams();
    const [episodio, setEpisodio] = useState();

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/' + params.episodioId)
        .then (res => res.json)
        .then (res => {
            console.log(res);
            setEpisodio(res);
        })
    });
}

export default mostraEpisidios;