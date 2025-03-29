import s from "./livrosDoados.module.scss";
import ComponenteLivro from "../../components/livroDoado/ComponenteLivro";

export default function LivrosDoados() {

  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      < ComponenteLivro />
    </section>

  );
}
