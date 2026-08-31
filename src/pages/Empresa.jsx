import {
  IconArrowRight,
  IconAward,
  IconCheck,
  IconHistory,
  IconPhone,
  IconTarget,
  IconUsers,
  IconChevronDown
} from "@tabler/icons-react";

import Header from "../components/header";
import Footer from "../components/footer";
import { scrollDown } from "../lib/scrollDown";
import { whatsappUrl } from "../components/whatsapp";

const mensagem =
  "Olá! Vim pelo site do IMI e gostaria de conhecer melhor a empresa e seus serviços.";

export default function Empresa() {
  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}

        <section
        className="
            relative
            min-h-screen
            overflow-hidden
            bg-gray-950
        "
        >

        {/* Vídeo de fundo */}
        <video
            className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            "
            autoPlay
            muted
            loop
            playsInline
        >
            <source src="/imgs/banner3.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
        </video>

        {/* Overlay */}
        <div
            className="
            absolute
            inset-0
            bg-gray-950/80
            "
        />

        {/* Conteúdo */}
        <div className="relative z-10">

            <Header />

          <div
            className="
              flex
              flex-1
              items-center
              justify-center
              px-4
              py-20
              text-center
              sm:px-6
              lg:px-8
            "
          >

            <div className="mx-auto max-w-4xl">

              {/* Identificação */}

              <span
                className="
                  mt-6
                  inline-block
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-blue-400
                "
              >
                Instituto de Metrologia Industrial
              </span>

              <h1
                className="
                  mt-4
                  text-4xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Nossa{" "}
                <span className="text-blue-500">
                  história
                </span>
              </h1>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-8
                  text-gray-300
                  sm:text-xl
                "
              >
                Uma trajetória construída através da metrologia,
                da engenharia e do compromisso com a qualidade,
                a precisão e a confiabilidade.
              </p>

              {/* Botão */}

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <button
                    type="button"
                    onClick={() => {scrollDown("historia")}}
                    aria-label="Conheça nossa história"
                    className="
                        mt-10
                        animate-pulse
                        text-white
                        transition-colors
                        duration-200
                        hover:text-blue-400
                    "
                    >
                    <IconChevronDown
                        size={36}
                        stroke={1.8}
                    />
                    </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          HISTÓRIA
      ========================================================= */}

      <section
        id="historia"
        className="
          mx-auto
          max-w-7xl
          px-4
          py-20
          sm:px-6
          lg:px-8
        "
      >

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Texto */}

          <div>

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-blue-600
              "
            >
              Nossa trajetória
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
                sm:text-4xl
              "
            >
              Experiência construída ao longo dos anos
            </h2>

            <div
              className="
                mt-6
                space-y-5
                text-lg
                leading-8
                text-gray-600
              "
            >

              <p>
                O{" "}
                <strong className="text-gray-900">
                  IMI – Instituto de Metrologia Industrial
                </strong>{" "}
                atua no segmento de metrologia e instrumentação,
                oferecendo soluções técnicas para empresas de
                diferentes setores da indústria.
              </p>

              <p>
                Desde sua fundação, o IMI vem construindo sua
                trajetória baseada na precisão das medições,
                na confiabilidade dos resultados e na busca
                constante pela excelência técnica.
              </p>

              <p>
                Ao longo dessa trajetória, ampliamos nossa
                capacidade de atendimento e nossa estrutura,
                incorporando diferentes grandezas e serviços
                às nossas áreas de atuação.
              </p>

              <p>
                Hoje, reunimos experiência, conhecimento técnico,
                equipamentos e procedimentos para atender às
                necessidades metrológicas de nossos clientes.
              </p>

            </div>

          </div>


          {/* Destaque histórico */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-8
              sm:p-10
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                text-white
              "
            >
              <IconHistory size={30} stroke={1.7} />
            </div>

            <p
              className="
                mt-7
                text-5xl
                font-extrabold
                tracking-tight
                text-blue-600
              "
            >
              1997
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-bold
                text-gray-900
              "
            >
              Início da nossa trajetória
            </h3>

            <p
              className="
                mt-4
                leading-7
                text-gray-600
              "
            >
              Desde 1997, construímos uma trajetória dedicada
              à metrologia, à instrumentação e ao atendimento
              das necessidades técnicas da indústria.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          MISSÃO / VISÃO / VALORES
      ========================================================= */}

      <section className="border-y border-gray-100 bg-gray-50">

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-20
            sm:px-6
            lg:px-8
          "
        >

          <div className="mx-auto max-w-3xl text-center">

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-blue-600
              "
            >
              Quem somos
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                text-gray-900
                sm:text-4xl
              "
            >
              Princípios que orientam nosso trabalho
            </h2>

          </div>


          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-3
            "
          >

            {/* Missão */}

            <article
              className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-7
                shadow-sm
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-50
                  text-blue-600
                "
              >
                <IconTarget size={26} stroke={1.7} />
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                  text-gray-900
                "
              >
                Missão
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-gray-600
                "
              >
                Oferecer serviços metrológicos e soluções
                técnicas com qualidade, precisão e
                confiabilidade, contribuindo para o
                desenvolvimento de nossos clientes.
              </p>

            </article>


            {/* Visão */}

            <article
              className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-7
                shadow-sm
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-50
                  text-blue-600
                "
              >
                <IconAward size={26} stroke={1.7} />
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                  text-gray-900
                "
              >
                Visão
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-gray-600
                "
              >
                Ser reconhecido pela excelência técnica,
                confiabilidade e qualidade dos serviços
                prestados no segmento de metrologia e
                instrumentação.
              </p>

            </article>


            {/* Valores */}

            <article
              className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-7
                shadow-sm
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-50
                  text-blue-600
                "
              >
                <IconUsers size={26} stroke={1.7} />
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                  text-gray-900
                "
              >
                Valores
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-gray-600
                "
              >
                Ética, responsabilidade, precisão, compromisso
                com a qualidade, segurança e respeito aos
                nossos clientes e colaboradores.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================================
          ESTRUTURA E EXPERIÊNCIA
      ========================================================= */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          py-20
          sm:px-6
          lg:px-8
        "
      >

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div
            className="
              order-2
              rounded-2xl
              bg-blue-900
              p-8
              text-white
              sm:p-10
              lg:order-1
            "
          >

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-blue-300
              "
            >
              Nossa estrutura
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                sm:text-4xl
              "
            >
              Conhecimento técnico aliado à tecnologia
            </h2>

            <p
              className="
                mt-5
                text-lg
                leading-8
                text-blue-100
              "
            >
              Nossa estrutura foi desenvolvida para atender
              diferentes necessidades de medição, calibração,
              inspeção e ensaio.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Laboratórios especializados",
                "Equipe técnica qualificada",
                "Equipamentos adequados às grandezas avaliadas",
                "Procedimentos técnicos controlados",
                "Rastreabilidade das medições",
                "Atendimento às necessidades da indústria",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600
                    "
                  >
                    <IconCheck size={16} />
                  </div>

                  <span className="text-blue-50">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          <div className="order-1 lg:order-2">

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-blue-600
              "
            >
              Experiência
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
                sm:text-4xl
              "
            >
              Uma empresa preparada para diferentes desafios
            </h2>

            <div
              className="
                mt-6
                space-y-5
                text-lg
                leading-8
                text-gray-600
              "
            >

              <p>
                A experiência acumulada ao longo dos anos
                permite ao IMI atuar em diferentes segmentos
                e necessidades da indústria.
              </p>

              <p>
                Nossa atuação reúne metrologia, instrumentação
                e engenharia, proporcionando uma abordagem
                técnica integrada aos serviços oferecidos.
              </p>

              <p>
                Buscamos constantemente aprimorar nossos
                processos e acompanhar a evolução tecnológica
                do setor, mantendo o foco na qualidade e na
                confiabilidade dos resultados.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          COMPROMISSO
      ========================================================= */}

      <section className="bg-gray-50">

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-16
            text-center
            sm:px-6
            lg:px-8
          "
        >

          <IconAward
            size={38}
            stroke={1.5}
            className="mx-auto text-blue-600"
          />

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              text-gray-900
              sm:text-4xl
            "
          >
            Compromisso com a qualidade
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-lg
              leading-8
              text-gray-600
            "
          >
            Em cada serviço, buscamos manter o mesmo
            compromisso que acompanha nossa trajetória:
            entregar resultados confiáveis e soluções
            técnicas adequadas às necessidades de nossos
            clientes.
          </p>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="bg-gray-950 text-white">

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-20
            text-center
            sm:px-6
            lg:px-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              sm:text-4xl
            "
          >
            Conheça o IMI
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-gray-300
            "
          >
            Entre em contato com nossa equipe e conheça
            nossas soluções em metrologia, instrumentação
            e engenharia.
          </p>

          <a
            href={whatsappUrl(mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-blue-600
              px-7
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <IconPhone size={20} />

            Fale com nossa equipe

            <IconArrowRight size={20} />
          </a>

        </div>

      </section>


      <Footer />

    </main>
  );
}