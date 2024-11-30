import s from "./queroDoar.module.scss";
import livroAbertoQueroDoar from "../../assets/livroAbertoQueroDoar.png";

export default function QueroDoar() {
  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do livro.
      </p>

      <form action="">
        <div>
          <img src={livroAbertoQueroDoar} alt="" />
          <h2>Informações do Livro</h2>
        </div>

        <input type="text" name="" id="" placeholder="Título" />
        <input type="text" name="" id="" placeholder="Categoria" />
        <input type="text" name="" id="" placeholder="Autor" />
        <input type="url" name="" id="" placeholder="Link da imagem" />

        <input type="submit" value="Doar" className={s.buttonDoar} />
      </form>
    </section>
  );
}
