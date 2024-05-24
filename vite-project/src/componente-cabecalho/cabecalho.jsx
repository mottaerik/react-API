import { Link, Outlet } from "react-router-dom";

function Cabecalho() {
    return (
        <>
            <h1>Meu primeiro projeto React</h1>
            <Link to={'/tarefas'}>Tarefas </Link>
            <br />

            <Link to={'/consulta-personagens/personagemId'}>Consulta de Personagens</Link>
            <br />
            
            <Link to={'/consulta-ram'}>Personagens Rick and Morty</Link>
            <br />
            <Outlet />
        </>
    );
}
export default Cabecalho;