import s from "./livrosDoados.module.scss";
import livroExemplo from "../../assets/livrosExemplo/livroExemplo.png";
import ametamorfose from "../../assets/livrosExemplo/ametamorfose.jpg";
import narnia from "../../assets/livrosExemplo/narnia.jpg";
import orgulhoepreconceito from "../../assets/livrosExemplo/orgulhoepreconceito.jpg";

export default function LivrosDoados() {
  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>

      <section className={s.containerCards}>
        <section>
          <img
            src={livroExemplo}
            alt="Imagem do livro o 'Protagonista' de Karina Barbosa - Categoria: Ficção"
          />
          <div>
            <h3>Protagonista</h3>
            <p>Karina Barbosa</p>
            <p>Ficção</p>
          </div>
        </section>

        <section>
          <img
            src={ametamorfose}
            alt="Imagem do livro o 'A Metamorfose' de Frank Kafka - Categoria: Ficção"
          />
          <div>
            <h3>A Metamorfose</h3>
            <p>Frank Kafka</p>
            <p>Ficção</p>
          </div>
        </section>

        <section>
          <img
            src={narnia}
            alt="Imagem do livro o 'As Crônicas de Nárnia' de C.S. Lewis - Categoria: Ficção"
          />
          <div>
            <h3>As Crônicas de Nárnia</h3>
            <p>C.S. Lewis</p>
            <p>Ficção</p>
          </div>
        </section>

        <section>
          <img
            src={orgulhoepreconceito}
            alt="Imagem do livro o 'O Protagonista' de Jane Austen - Categoria: Ficção"
          />
          <div>
            <h3>Orgulho e Preconceito</h3>
            <p>Jane Austen</p>
            <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  );
}
