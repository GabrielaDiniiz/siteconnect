import s from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import igFamilia from "../../assets/imagens/igFamilia.png";
import pfEscola from "../../assets/imagens/pfEscola.png";
import conecta from "../../assets/imagens/conecta.png";

const Doacao = () => {
  return (
    <main className={s.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard
            img={igFamilia}
            alt="Imagem de uma pessoa carregando caixa com alimentos"
            subtitulo="Instituto grande familia"
            paragrafo1="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textoBotao="Quero Doar"
          />
        </article>

        <article>
          <InfoCard
            img={pfEscola}
            alt="Imagem de livros"
            subtitulo="Projeto Futuro na Escola"
            paragrafo1="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            textoBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard
            img={conecta}
            alt=""
            subtitulo="Instituto Conecta Jovem"
            paragrafo1="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
            textoBotao="Quero Doar"
          />
        </article>
      </section>
    </main>
  );
};

export default Doacao;
