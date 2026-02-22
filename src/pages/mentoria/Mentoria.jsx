import s from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import mentoria from "../../assets/imagens/mentoria.png";
import experiencia from "../../assets/imagens/experiencia.png";
import acompanhamento from "../../assets/imagens/acompanhamento.png";

const Mentoria = () => {
  return (
    <main className={s.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard
            img={mentoria}
            alt="Imagem com as mãos de três pessoas em uma mesa."
            subtitulo="Mentoria de Carreira e Emprego"
            paragrafo1="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            textoBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={experiencia}
            alt="Imagem com cinco pessoas compartilhando experiências."
            subtitulo="Compartilhe Experiência"
            paragrafo1="Oriente jovens e profissionais iniciantes em sua área."
            textoBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={acompanhamento}
            alt="Imagem com duas mulheres fazendo acompanhamento."
            subtitulo="Acompanhamento"
            paragrafo1="Participe como guia em jornadas de aprendizado e desenvolvimento."
            textoBotao="Quero Participar"
          />
        </article>
      </section>
    </main>
  );
};

export default Mentoria;
