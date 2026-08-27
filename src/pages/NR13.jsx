import {
  IconArrowRight,
  IconCheck,
  IconFileCertificate,
  IconPhone,
  IconSettings,
  IconShieldCheck,
} from "@tabler/icons-react";
import Header from "../components/header";
import Footer from "../components/footer";

const mensagem =
  "Olá! Vim pelo site e gostaria de saber mais sobre os serviços de NR13.";

const url = `https://wa.me/5521980724943?text=${encodeURIComponent(mensagem)}`;

export default function NR13() {
  const servicos = [
    {
      titulo: "Inspeção em vasos de pressão",
      descricao:
        "Avaliação das condições dos vasos de pressão, considerando os requisitos técnicos e de segurança aplicáveis ao equipamento.",
      icon: IconShieldCheck,
    },
    {
      titulo: "Inspeção em caldeiras",
      descricao:
        "Inspeções técnicas destinadas à avaliação das condições de segurança e integridade de caldeiras.",
      icon: IconSettings,
    },
    {
      titulo: "Inspeção em tanques e tubulações",
      descricao:
        "Avaliação de tanques e sistemas de tubulação utilizados em instalações industriais.",
      icon: IconSettings,
    },
    {
      titulo: "Teste hidrostático e estanqueidade",
      descricao:
        "Execução de ensaios destinados à avaliação da resistência e estanqueidade dos equipamentos e sistemas.",
      icon: IconCheck,
    },
    {
      titulo: "Medição de espessura",
      descricao:
        "Medição de espessura para avaliação das condições dos materiais e acompanhamento de possíveis processos de desgaste e corrosão.",
      icon: IconSettings,
    },
    {
      titulo: "Calibração de válvulas de segurança",
      descricao:
        "Calibração de válvulas de segurança, contribuindo para o correto funcionamento dos dispositivos de proteção dos equipamentos.",
      icon: IconShieldCheck,
    },
    {
      titulo: "Calibração de manômetros",
      descricao:
        "Calibração de instrumentos utilizados para indicação e monitoramento de pressão.",
      icon: IconSettings,
    },
    {
      titulo: "Calibração de transmissores",
      descricao:
        "Calibração de transmissores utilizados nos sistemas de medição e controle de processos industriais.",
      icon: IconFileCertificate,
    },
    {
      titulo: "Treinamentos",
      descricao:
        "Treinamentos relacionados à segurança em unidades de processo e caldeiras, de acordo com as necessidades da instalação e os requisitos aplicáveis.",
      icon: IconShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-gray-950">

        <Header/>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/imgs/banner.webp')",
          }}
        />

        <div className="absolute inset-0 bg-gray-950/80"/>

        <div className="relative py-24 flex items-center justify-center">

          <div className="flex flex-col items-center justify-center">

            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Engenharia e Inspeção
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Norma Regulamentadora{" "}
              <span className="text-blue-500">
                NR-13
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
              Inspeção, calibração e serviços especializados
              para equipamentos e sistemas submetidos à pressão.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#servicos"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Conheça nossos serviços

                <IconArrowRight size={20} />
              </a>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  border
                  border-white/30
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                <IconPhone size={20} />

                Fale conosco
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRODUÇÃO
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Texto */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Engenharia NR-13
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Segurança, confiabilidade e excelência
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">

              <p>
                O departamento de Engenharia do{" "}
                <strong className="text-gray-900">
                  IMI – Instituto de Metrologia Industrial
                </strong>{" "}
                é especializado na área de NR-13, oferecendo
                serviços de inspeção, ensaios e calibração para
                equipamentos e sistemas submetidos à pressão.
              </p>

              <p>
                Nossa atuação contempla vasos de pressão,
                caldeiras, tubulações, válvulas de segurança e
                indicadores de pressão, contribuindo para a
                segurança, confiabilidade e integridade dos
                equipamentos em operação.
              </p>

              <p>
                Contamos com uma equipe qualificada e experiente,
                preparada para atender às necessidades de
                diferentes segmentos industriais, incluindo
                empresas de grande porte do setor petrolífero.
              </p>

            </div>

          </div>


          {/* Losango NR-13 */}

          <div className="flex justify-center">

            <div className="relative flex h-72 w-72 items-center justify-center">

              <div
                className="
                  absolute
                  h-52
                  w-52
                  rotate-45
                  rounded-xl
                  border-8
                  border-blue-600
                  bg-white
                  shadow-xl
                "
              />

              <div className="relative text-center">

                <span className="block text-5xl font-extrabold text-blue-600">
                  NR
                </span>

                <span className="block text-4xl font-bold text-gray-900">
                  13
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DESTAQUE
      ========================================================= */}

      <section className="border-y border-gray-100 bg-gray-50">

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-lg leading-8 text-gray-600 sm:text-xl">
              Investimos continuamente em tecnologia,
              equipamentos e métodos de inspeção atualizados,
              buscando proporcionar resultados precisos e
              confiáveis para nossos clientes.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVIÇOS
      ========================================================= */}

      <section
        id="servicos"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Nossos serviços
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Serviços qualificados para NR-13
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Serviços técnicos voltados à inspeção, avaliação,
            calibração e segurança de equipamentos industriais.
          </p>

        </div>


        {/* Cards */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {servicos.map((servico) => {

            const Icon = servico.icon;

            return (
              <article
                key={servico.titulo}
                className="
                  group
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-lg
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
                    transition
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  <Icon size={25} stroke={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {servico.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {servico.descricao}
                </p>

              </article>
            );
          })}

        </div>

      </section>


      {/* =========================================================
          ATUAÇÃO
      ========================================================= */}

      <section className="bg-gray-950 text-white">

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Nossa atuação
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Experiência aplicada à segurança
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-300">
                A experiência do IMI em metrologia,
                instrumentação e engenharia permite oferecer
                uma abordagem técnica integrada às necessidades
                de nossos clientes.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                Nossa atuação busca contribuir para a
                confiabilidade dos equipamentos e para a
                segurança das instalações industriais.
              </p>

            </div>


            <div className="space-y-5">

              {[
                "Equipe técnica qualificada",
                "Experiência no setor industrial",
                "Atuação em empresas de grande porte",
                "Investimento em tecnologia",
                "Métodos de inspeção atualizados",
                "Compromisso com segurança e qualidade",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600
                    "
                  >
                    <IconCheck size={18} />
                  </div>

                  <span className="text-lg text-gray-200">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        <div
          className="
            overflow-hidden
            rounded-2xl
            bg-blue-600
            px-6
            py-12
            text-center
            sm:px-12
          "
        >

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Precisa de serviços em NR-13?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            Entre em contato com nossa equipe para obter mais
            informações sobre nossos serviços de engenharia,
            inspeção e calibração.
          </p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-white
              px-7
              py-3
              font-semibold
              text-blue-700
              shadow-sm
              transition
              hover:bg-gray-100
            "
          >
            <IconPhone size={20} />

            Fale com nossa equipe
          </a>

        </div>

      </section>

      <Footer/>

    </main>
  );
}