import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ConsultaRAM() {
    const [personagens, setPersonagens] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { // UseEffect = Executa o codigo apenas uma vez.
        console.log('Consultar API');
        fetch('https://rickandmortyapi.com/api/character')
        .then((resposta) => {
            return resposta.json();
        })
        .then((resultadoConsulta) => {
            setPersonagens(resultadoConsulta.results);
        });
    }, []); 

    function mostrarEpisodio(episodiosId) {
        const episodioId = episodiosId.split('https://rickandmortyapi.com/api/episode')[1];
        navigate("/mostra-episodios/" + episodiosId)
    }

    function getListaPaginas() {
        if(!personagensResultado) return;
        const paginas = [];
        for (let index = i; index <= personagensResultado.info.pages; index++){
            paginas.push(
                <span onClick={() => setPaginaAtual(index)}
                    className="pagina-botao">{index}</span>
            );
        }
        return paginas;
    }

    function click(idPersonagem) {
        navigate("/consulta-personagens/" + idPersonagem);
    }

    return <>
        {
           personagens.map(personagem => {
             return <>
                <h2>{personagem.name}</h2>
                <h2>{personagem.gender}</h2>
                <h2 onClick={()=> click(personagem.id)}>{<img src={personagem.image}/>}</h2>
                <span class-name='episodio-link' onClick={() => mostrarEpisodio(personagem.episode[0])}> {personagem.episode}</span>
             </>
           })
        }

        {
        <nav aria-label="Navegação de página exemplo">
        <ul class="pagination justify-content-end">
        <li class="page-item disabled">
        <a class="page-link" href="http://127.0.0.1:5173/" tabindex="-1">Anterior</a>
        </li>
        <li class="page-item"><a class="page-link" href="https://github.com/mottaerik?tab=repositories">1</a></li>
        <li class="page-item"><a class="page-link" href="https://github.com/mottaerik?tab=repositories">2</a></li>
        <li class="page-item">
        <a class="page-link" href="#">Próximo</a>
        </li>
         </ul>
        </nav>
        }
    </>
    }

export default ConsultaRAM;