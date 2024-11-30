import s from "./livrosDoados.module.scss";
import livroExemplo from "../../assets/livroExemplo.png";

export default function LivrosDoados() {
  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>

      <section className={s.containerCards}>
        <section>
          <img
            src={livroExemplo}
            alt="Imagem do livro o 'O Protagonista' de Susanne Andrade - Categoria: Ficção"
          />
          <div>
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  );
}
