import s from "./inicio.module.scss";
import imagemDoacao from "../../assets/imagemDoacao.png";
import imagemLeitor from "../../assets/imagemLeitor.png";
import imagemMaoPessoas from "../../assets/imagemMaoPessoas.png";
import imagemJusticaSimbolo from "../../assets/imagemJusticaSimbolo.png";

export default function Inicio() {
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.porqueDoarSection}>
        <h2>Por que devo doar?</h2>
        <section className={s.containerCards}>
          <section>
            <img src={imagemDoacao} alt="Ilustração de quatro silhuetas humanas formando um círculo conectado." />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </section>
          <section>
            <img src={imagemLeitor} alt="Ilustração de uma silhueta humana segurando/lendo o livro." />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
            <img src={imagemMaoPessoas} alt="Ilustração de 6 silhuetas humanas de pé conectadas por um símbolo de mão fechada." />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </section>
          <section>
            <img src={imagemJusticaSimbolo} alt="Ilustração de uma balança de dois pesos representando a justiça." />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
