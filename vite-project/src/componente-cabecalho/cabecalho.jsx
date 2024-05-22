import { Link, Outlet } from "react-router-dom";

function Cabecalho() {
    return (
        <>
            <h1>Meu projeto</h1>
            <Link to={'/tarefas'} >Tarefas </Link>
            <br></br>
            <Link to={'/rota2'}> Rota2</Link>
            <br></br>
            <Link to={'/consulta-ram'}> Consulta Rick and Morty</Link>
            <Outlet />
        </>
    );
}
export default Cabecalho;