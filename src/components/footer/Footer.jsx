import facebook from "../../assets/logosRedesSociais/facebook.png";
import twitter from "../../assets/logosRedesSociais/twitter.png";
import youtube from "../../assets/logosRedesSociais/youtube.png";
import linkedin from "../../assets/logosRedesSociais/linkedin.png";
import instagram from "../../assets/logosRedesSociais/instagram.png";
import s from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <ul>
            <li>
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Logo da plataforma do Facebook" />
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Logo da plataforma do X" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="Logo da plataforma do Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Logo da plataforma do Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Logo da plataforma do Facebook" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>
          Layout desenvolvido pela Vai Na Web para fins educativos - 2024
        </p>
      </section>
    </footer>
  );
}
