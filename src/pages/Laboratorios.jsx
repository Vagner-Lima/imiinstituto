import { useEffect, useState } from "react";

import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconCertificate,
  IconPhone,
  IconTestPipe,
} from "@tabler/icons-react";

import Header from "../components/header";
import Footer from "../components/footer";
import { whatsappUrl } from "../components/whatsapp";
import { scrollDown } from "../lib/scrollDown";

const mensagem = "Olá! Vim pelo site e gostaria de saber mais sobre os serviços de Calibração do IMI."

const laboratorios = [
  {
    id: "dimensional",
    nome: "Laboratório Dimensional",
    imagem: "/imgs/imi/labDimensional.jpg",
    resumo:
      "Serviços de calibração e medição dimensional destinados a instrumentos utilizados no controle dimensional de peças, componentes e processos industriais.",

    acreditados: [
      "Paquímetros até 300 mm",
      "Micrômetros externos até 300 mm",
      "Relógios comparadores até 25 mm / 0,01 mm",
      "Nível de Bolha",
      "Trenas até 50 m",
      "Escala graduada até 2m",
      "Esquadros",
    ],

    rastreados: [
      "Medição de Peças Diversas",
      "Bloco Escalonado",
      "Bloco Padrão Dimensional",
      "Calibre de Solda Hi-Lo, FBTS",
      "Calibre de Folga",
      "Calibre de Raio",
      "Clinômetro / Inclinômetro / Gôniometro",
      "Esquadro Combinado",
      "Medidor de Espessura por Ultrassom",
      "Medidor de Espessura de Película Úmida ou Seca",
      "Padrão de Espessura / Lâmina para Medidor de Camada de Tinta Seca",
      "Pastilha Sensora",
      "Relógio Apalpador",
      "Rugosímetro de Relógio",
      "Trena a Laser",
      "Peneira Granulométrica",
      "Calibrador Tampão Roscado Cônico e Cilíndrico",
      "Calibrador de Anel Roscado Cônico e Cilíndrico",
      "Hastes Padrão",
    ],
  },

  {
    id: "eletricidade",
    nome: "Laboratório de Eletricidade",
    imagem: "/imgs/imi/labEletrica.jpg",
    resumo:
      "Calibração de instrumentos elétricos utilizados em medições, manutenção, controle e monitoramento de processos industriais.",

    acreditados: [
      "Medidores e Simuladores de Corrente AC/DC",
      "Medidores e Simuladores de Tensão AC/DC",
      "Medidores e Simuladores de Resistência",
      "Medidores e Simuladores de Temperatura"
    ],

    rastreados: [
      "Luxímetro",
      "Megômetro",
      "Detector de Tensão",
      "Fasímetro",
      "Testes de Resistência (Bastões e Luvas)",
      "Testes de Isolamento (Tapete e Ferramentas)",
      "Gerador de Função",
      "Jogo Magnetizador (Yoke)"
    ],
  },

  {
    id: "pressao",
    nome: "Laboratório de Pressão",
    imagem: "/imgs/imi/labPressao.jpg",
    resumo:
      "Serviços especializados na calibração de instrumentos destinados à medição e controle de pressão em processos industriais.",

    acreditados: [
      "Manômetros (Digital / Analógico)",
      "Vacuômetros (Digital / Analógico)",
    ],

    rastreados: [
      "Esfigmomanômetro",
      "Medidores de Vazão",
      "Pressostatos",
    ],
  },

  {
    id: "temperatura",
    nome: "Laboratório de Temperatura e Umidade",
    imagem: "/imgs/imi/labTemp.jpg",
    resumo:
      "Calibração de instrumentos utilizados na medição e controle de temperatura e umidade em processos industriais e laboratoriais.",

    acreditados: [
      "Termômetros com Sensor Termopar ou Termoressistivo (Analógicos / Digitais)",
      "Termohigrômetro e Termohigrógrafo",
      "Medidor de Umidade Relativa (Higrômetro)",
      "Termorresistências (PT-100)",
      "Termômetro de Radiação Infravermelha (Infrared)",
      "Termômetro Mecânico / Bimetálico"
    ],

    rastreados: [
      "Termoanemômetro",
      "Controlador e Indicador de Temperatura",
    ],
  },

  {
    id: "forca",
    nome: "Laboratório de Massa, Força, Torque e Dureza",
    imagem: "/imgs/imi/labTorque.jpg",
    resumo:
      "Calibração de instrumentos utilizados em medições de força, torque e dureza aplicadas aos processos de fabricação, inspeção e manutenção.",

    acreditados: [
      "Torquímetros até 4000 Nm",
      "Calibrador de Torquímetros até 4000 Nm",
    ],

    rastreados: [
      "Instrumentos de Medição de Força de Uso Geral em Tração e Compressão",
      "Dinamômetros",
      "Balanças",
      "Células de Carga",
      "Pesos Padrão",
    ],
  },

  {
    id: "fisico-quimico",
    nome: "Laboratório Físico-Químico",
    imagem: "/imgs/imi/labFisico.jpg",
    resumo:
      "Serviços relacionados à avaliação e calibração de instrumentos utilizados em análises físico-químicas e no controle de processos.",

    acreditados: [],

    rastreados: [
      "pHmetros",
      "Condutivímetros",
      "Detector de Gases (O2, CO, %LEL, CH4)",
      "Detector de Fuga de Gás"
    ],
  },

  {
    id: "tempo-frequencia",
    nome: "Laboratório de Tempo e Frequência",
    imagem: "/imgs/imi/labTempo.jpg",
    resumo:
      "Serviços metrológicos relacionados à medição de tempo e frequência para aplicações industriais, laboratoriais e de controle.",

    acreditados: [],

    rastreados: [
      "Cronômetros",
      "Tacômetros",
    ],
  },

];

export default function Laboratorios() {
  const [slideAtual, setSlideAtual] = useState(0);

  /*
  |--------------------------------------------------------------------------
  | SLIDESHOW AUTOMÁTICO
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((atual) =>
        atual === laboratorios.length - 1 ? 0 : atual + 1
      );
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  function proximoSlide() {
    setSlideAtual((atual) =>
      atual === laboratorios.length - 1 ? 0 : atual + 1
    );
  }

  function slideAnterior() {
    setSlideAtual((atual) =>
      atual === 0 ? laboratorios.length - 1 : atual - 1
    );
  }

  function selecionarSlide(index) {
    setSlideAtual(index);
  }

  const laboratorioAtual = laboratorios[slideAtual];

  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          HERO / SLIDESHOW
      ========================================================= */}

      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-gray-950
        "
      >

        {/* Slides */}

        {laboratorios.map((laboratorio, index) => (
          <div
            key={laboratorio.id}
            className={`
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
              transition-opacity
              duration-1000
              ${
                index === slideAtual
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
            style={{
              backgroundImage: `url('${laboratorio.imagem}')`,
            }}
          />
        ))}

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gray-950/70
          "
        />

        {/* Gradiente inferior */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-linear-to-t
            from-gray-950
            to-transparent
          "
        />

        {/* Conteúdo */}

        <div className="relative z-10 flex min-h-screen flex-col">

          <Header />

          <div
            className="
              flex
              flex-1
              items-center
              justify-center
              px-4
              py-20
              sm:px-6
              lg:px-8
            "
          >

            <div className="w-full max-w-5xl text-center">

              {/* Identificação */}

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-blue-400/30
                  bg-blue-500/10
                  text-blue-400
                  backdrop-blur-sm
                "
              >
                <IconTestPipe
                  size={34}
                  stroke={1.5}
                />
              </div>

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
                Estrutura e Tecnologia
              </span>

              {/* Nome do laboratório */}

              <h1
                className="
                  mt-5
                  min-h-16
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  transition-all
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {laboratorioAtual.nome}
              </h1>

              {/* Descrição */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-8
                  text-gray-200
                  sm:text-xl
                "
              >
                {laboratorioAtual.resumo}
              </p>

              {/* Botões */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  sm:flex-row
                "
              >

                <button
                  type="button"
                  onClick={() => {scrollDown(String(laboratorioAtual.id))}}
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
                    shadow-lg
                    transition
                    hover:bg-blue-700
                  "
                >
                  Conheça os serviços

                  <IconArrowDown size={20} />
                </button>

                <a
                  href={whatsappUrl(
                    `Olá! Vim pelo site e gostaria de saber mais sobre o ${laboratorioAtual.nome}.`
                  )}
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
                    bg-white/5
                    px-6
                    py-3
                    font-semibold
                    text-white
                    backdrop-blur-sm
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


          {/* =====================================================
              CONTROLES DO SLIDESHOW
          ===================================================== */}

          <div
            className="
              absolute
              bottom-8
              left-0
              right-0
              z-20
              flex
              items-center
              justify-center
              gap-4
            "
          >

            {/* Anterior */}

            <button
              type="button"
              onClick={slideAnterior}
              aria-label="Laboratório anterior"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/20
                text-white
                backdrop-blur-sm
                transition
                hover:bg-white/10
              "
            >
              <IconArrowLeft size={20} />
            </button>


            {/* Indicadores */}

            <div className="flex items-center gap-2">

              {laboratorios.map((laboratorio, index) => (
                <button
                  key={laboratorio.id}
                  type="button"
                  onClick={() => selecionarSlide(index)}
                  aria-label={`Ir para ${laboratorio.nome}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === slideAtual
                        ? "w-8 bg-blue-500"
                        : "w-2 bg-white/50 hover:bg-white"
                    }
                  `}
                />
              ))}

            </div>


            {/* Próximo */}

            <button
              type="button"
              onClick={proximoSlide}
              aria-label="Próximo laboratório"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/20
                text-white
                backdrop-blur-sm
                transition
                hover:bg-white/10
              "
            >
              <IconArrowRight size={20} />
            </button>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRODUÇÃO
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
            Estrutura metrológica
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
            Precisão em cada medição
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-gray-600
            "
          >
            O IMI possui laboratórios especializados em
            diferentes grandezas metrológicas, oferecendo
            serviços de calibração com qualidade, precisão,
            confiabilidade e rastreabilidade.
          </p>

        </div>

      </section>


      {/* =========================================================
          INFORMAÇÕES DOS LABORATÓRIOS
      ========================================================= */}

      <section
        id="laboratorios"
        className="bg-gray-50"
      >

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
              Grandezas metrológicas
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
              Nossos serviços
            </h2>

            <p
              className="
                mt-4
                text-lg
                leading-8
                text-gray-600
              "
            >
              Conheça as grandezas atendidas pelo IMI e os
              principais serviços disponíveis em cada área.
            </p>

          </div>


          {/* =====================================================
              LABORATÓRIOS
          ===================================================== */}

          <div className="mt-12 space-y-8">

            {laboratorios.map((laboratorio) => (

              <article
                key={laboratorio.id}
                id={laboratorio.id}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                "
              >

                {/* Cabeçalho */}

                <div
                  className="
                    border-b
                    border-gray-100
                    px-6
                    py-6
                    sm:px-8
                    flex
                    items-center
                    justify-center
                  "
                >

                  <div className="flex flex-col items-center gap-4">

                    <div className="flex flex-row justify-center items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <IconTestPipe
                        size={26}
                        stroke={1.7}
                      />
                    </div>

                      <h3
                        className="
                          text-xl
                          font-bold
                          text-gray-900
                          sm:text-2xl
                        "
                      >
                        {laboratorio.nome}
                      </h3>
                      </div>
                      <p
                        className="
                          mt-2
                          max-w-4xl
                          text-sm
                          leading-6
                          text-gray-600
                          sm:text-base
                        "
                      >
                        {laboratorio.resumo}
                      </p>

                    </div>

                  </div>


                {/* Serviços */}

                <div
                  className="
                    grid
                    gap-8
                    px-6
                    py-8
                    md:grid-cols-2
                    sm:px-8
                  "
                >

                  {/* =================================================
                      ACREDITADOS
                  ================================================= */}

                  <div className="flex justify-baseline items-center flex-col">

                    <div className="flex items-center gap-3 flex-row">

                      <div className="flex flex-col items-center justify-center">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-blue-600
                            text-white
                          "
                        >
                          <IconCertificate size={21} />
                        </div>


                          <h4
                            className="
                              font-semibold
                              text-gray-900
                            "
                          >
                            Serviços acreditados
                          </h4>

                          <p className="text-xs text-gray-500">
                            Serviços dentro do escopo de acreditação (RBC).
                          </p>

                      </div>

                    </div>

                    <ul className="mt-5 space-y-2.5">

                      {laboratorio.acreditados.map(
                        (servico) => (

                          <li
                            key={servico}
                            className="
                              flex
                              items-start
                              gap-3
                              text-sm
                              text-gray-700
                            "
                          >

                            <IconCheck
                              size={18}
                              className="
                                mt-0.5
                                shrink-0
                                text-blue-600
                              "
                            />

                            <span>
                              {servico}
                            </span>

                          </li>

                        )
                      )}

                    </ul>

                    <img src="/imgs/Selo.png" className="w-30 h-auto pt-10"/>

                  </div>


                  {/* =================================================
                      RASTREADOS
                  ================================================= */}

                  <div className="flex justify-baseline items-center flex-col">

                      <div className="flex flex-col items-center justify-center">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-gray-100
                          text-gray-600
                        "
                      >
                        <IconCheck size={21} />
                      </div>

                      <div>

                        <h4
                          className="
                            font-semibold
                            text-gray-900
                          "
                        >
                          Serviços rastreados
                        </h4>

                        <p className="text-xs text-gray-500">
                          Serviços realizados com rastreabilidade
                          metrológica.
                        </p>

                      </div>

                    </div>

                    <ul className="mt-5 space-y-2.5">

                      {laboratorio.rastreados.map(
                        (servico) => (

                          <li
                            key={servico}
                            className="
                              flex
                              items-start
                              gap-3
                              text-sm
                              text-gray-700
                            "
                          >

                            <IconCheck
                              size={18}
                              className="
                                mt-0.5
                                shrink-0
                                text-gray-500
                              "
                            />

                            <span>
                              {servico}
                            </span>

                          </li>

                        )
                      )}

                    </ul>

                  </div>

                </div>

              </article>

            ))}

          </div>

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
            Precisa calibrar um instrumento?
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
            Entre em contato com nossa equipe para verificar
            a disponibilidade do serviço e obter mais
            informações.
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


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />

    </main>
  );
}