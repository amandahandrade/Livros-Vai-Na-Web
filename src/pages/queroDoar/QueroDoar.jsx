import s from "./queroDoar.module.scss";
import livroAbertoQueroDoar from "../../assets/livroAbertoQueroDoar.png";
import { useState } from "react";
import axios from "axios";

export default function QueroDoar() {

  // Estado para armazenar a informação
  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [autor, setAutor] = useState("")
  const [image_url, setImage_Url] = useState("")

  // O e está capturando toda a tag input
  const capturaTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const capturaCategoria = (e) => {
    setCategoria(e.target.value)
  }
  
  const capturaAutor = (e) => {
    setAutor(e.target.value)
  }

  const capturaImage = (e) => {
    setImage_Url(e.target.value)
  }

  const enviarDados = async () => {
    const dadosPEnviar = {
      titulo,
      categoria,
      autor,
      image_url
    }

    await axios.post("https://api-livros-pcfv.onrender.com/doar", dadosPEnviar)
  }


  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do livro.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src={livroAbertoQueroDoar} alt="" />
          <h2>Informações do Livro</h2>
        </div>

        <input type="text" placeholder="Título" onChange={capturaTitulo} required/>
        <input type="text" placeholder="Categoria" onChange={capturaCategoria} required/>
        <input type="text" placeholder="Autor" onChange={capturaAutor} required/>
        <input type="url" placeholder="Link da imagem" onChange={capturaImage} required/>

        <input type="submit" value="Doar" className={s.buttonDoar} onClick={enviarDados} />
      </form>
    </section>
  );
}
