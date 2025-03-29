import s from "./componenteLivro.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ComponenteLivroDoado() {

    // Inicialização do estado
    const [livros, setLivros] = useState([]);

    // Criar função assíncrona para fazer requisição da API
    const dadosLivros = async () => {
        try {
            const dados = await axios.get("https://api-livros-pcfv.onrender.com/livros");
            console.log(dados.data);
            // Atualizamos a variavel de estado(livros)
            setLivros(dados.data);

        } catch (error) {
            console.error("Erro ao buscar os livros:", error);
        }


    };

    useEffect(() => {
        dadosLivros();
    }, []);

    return (
        <section className={s.containerCards}>
            {livros.map((item) => (
                <section className={s.livro}>
                    <img src={item.image_url} alt={item.titulo} />
                    <div>
                        <h3>{item.titulo}</h3>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </div>
                </section>
            ))}
        </section>
    )
}
