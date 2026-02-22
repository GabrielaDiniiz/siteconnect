import s from "./usuario.module.scss";
import {
  MdOutlinePlace,
  MdOutlineMail,
  MdOutlineCalendarToday,
} from "react-icons/md";

const Usuario = () => {
  return (
    <main className={s.main}>
      <section>
        <img
          src="https://avatars.githubusercontent.com/u/235968623?s=400&u=74a1c0150ab5e5de1d9358b987a6aeeedaa4d14b&v=4"
          alt="Imagem de perfil do usuário"
        />

        <div className={s.div}>
          <h1>Gabriela Diniz</h1>
          <h2>Voluntária Ativa</h2>
          <p>
            Apaixonada por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>
          <ul>
            <li>
              <MdOutlinePlace />
              Caxias – MA
            </li>
            <li>
              {" "}
              <MdOutlineMail />
              gabrieladinizadv01@gmail.com
            </li>
            <li>
              {" "}
              <MdOutlineCalendarToday />
              Membro desde Janeiro de 2026
            </li>
          </ul>

          <ul>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Usuario;
