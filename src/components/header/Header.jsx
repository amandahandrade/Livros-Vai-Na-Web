import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../pages/inicio/Inicio";
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";
import s from "./header.module.scss";

//  Imagens importadas:
import logoLivro from "../../assets/logoLivro.png";
import lupa from "../../assets/lupa.png";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={s.logoHeader}>
          {/* retiramos as aspas do SRC e colocamos {} para chamar a imagem*/}
          <img
            src={logoLivro}
            alt="Logotipo da plataforma: ilustração de um livro aberto com a capa em azul."
          />
          <h1>Livros Vai na Web</h1>
        </section>

        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/livrosdoados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/querodoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>

        <section className={s.barraBusca}>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img src={lupa} alt="Imagem de lupa branca." />
          </button>
        </section>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livrosdoados" element={<LivrosDoados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
