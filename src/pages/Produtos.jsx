import Header from "../components/header";
import Footer from "../components/footer";

const produtos = [
  {
    nome: "Calibradores rosca passa/não passa",
    descricao: "MF, NPT, BSW, BSP, M, UNC e UNF",
    imagem: "/imgs/produtos/prod048.png",
  },
  {
    nome: "Trena",
    descricao: "",
    imagem: "/imgs/produtos/prod047.png",
  },
  {
    nome: "Régua Graduada",
    descricao: "",
    imagem: "/imgs/produtos/prod046.png",
  },
  {
    nome: "Termo-higrômetro",
    descricao: "",
    imagem: "/imgs/produtos/prod045.png",
  },
  {
    nome: "Pentes de rosca",
    descricao: "",
    imagem: "/imgs/produtos/prod043.png",
  },
  {
    nome: "Calibradores rosca tampão passa/não passa",
    descricao: "MF, NPT, BSW, BSP, M, UNC e UNF",
    imagem: "/imgs/produtos/prod042.png",
  },
  {
    nome: "Calibradores de folga",
    descricao: "Jogo",
    imagem: "/imgs/produtos/prod041.png",
  },
  {
    nome: "Removedores",
    descricao: "",
    imagem: "/imgs/produtos/prod040.png",
  },
  {
    nome: "Yoke",
    descricao: "",
    imagem: "/imgs/produtos/prod039.png",
  },
  {
    nome: "Revelador",
    descricao: "",
    imagem: "/imgs/produtos/prod038.png",
  },
  {
    nome: "Penetrante",
    descricao: "",
    imagem: "/imgs/produtos/prod037.png",
  },
  {
    nome: "Padrões de dureza",
    descricao: "",
    imagem: "/imgs/produtos/prod036.png",
  },
  {
    nome: "Rugosímetros portáteis",
    descricao: "",
    imagem: "/imgs/produtos/prod035.png",
  },
  {
    nome: "Medidores de brilho",
    descricao: "Glossmeter",
    imagem: "/imgs/produtos/prod034.png",
  },
  {
    nome: "Durômetros",
    descricao: "",
    imagem: "/imgs/produtos/prod033.png",
  },
  {
    nome: "WPL",
    descricao: "1.000 kg e 1.500 kg",
    imagem: "/imgs/produtos/prod032.png",
  },
  {
    nome: "W200",
    descricao: "Portátil",
    imagem: "/imgs/produtos/prod031.png",
  },
  {
    nome: "W300",
    descricao: "Sem coluna",
    imagem: "/imgs/produtos/prod030.png",
  },
  {
    nome: "Balança mecânica",
    descricao: "",
    imagem: "/imgs/produtos/prod029.png",
  },
  {
    nome: "Multímetros digitais",
    descricao: "Plataforma 108 CH",
    imagem: "/imgs/produtos/prod028.png",
  },
  {
    nome: "Decibelímetros",
    descricao: "",
    imagem: "/imgs/produtos/prod027.png",
  },
  {
    nome: "Capacímetros",
    descricao: "",
    imagem: "/imgs/produtos/prod026.png",
  },
  {
    nome: "Alicates",
    descricao: "Digitais e analógicos",
    imagem: "/imgs/produtos/prod025.png",
  },
  {
    nome: "Válvula",
    descricao: "",
    imagem: "/imgs/produtos/prod024.png",
  },
  {
    nome: "Pressostato",
    descricao: "",
    imagem: "/imgs/produtos/prod023.png",
  },
  {
    nome: "Vacuômetro",
    descricao: "Digitais e analógicos",
    imagem: "/imgs/produtos/prod022.png",
  },
  {
    nome: "Manômetros",
    descricao: "Digitais e analógicos",
    imagem: "/imgs/produtos/prod021.png",
  },
  {
    nome: "Kit Bresle",
    descricao: "",
    imagem: "/imgs/produtos/prod020.png",
  },
  {
    nome: "Durômetros digitais",
    descricao: "Shore A e D",
    imagem: "/imgs/produtos/prod019.png",
  },
  {
    nome: "Rugosímetro digital",
    descricao: "Parâmetros RA, RZ, RQ e RT",
    imagem: "/imgs/produtos/prod018.png",
  },
  {
    nome: "Medidores de espessuras de camadas",
    descricao: "",
    imagem: "/imgs/produtos/prod017.png",
  },
  {
    nome: "Medidor de distância a laser",
    descricao: "",
    imagem: "/imgs/produtos/prod016.png",
  },
  {
    nome: "Termômetro infravermelho",
    descricao: "",
    imagem: "/imgs/produtos/prod015.png",
  },
  {
    nome: "Detector de 4 gases",
    descricao: "Com datalogger e interface USB",
    imagem: "/imgs/produtos/prod014.png",
  },
  {
    nome: "Boroscópio industrial portátil",
    descricao: "",
    imagem: "/imgs/produtos/prod013.png",
  },
  {
    nome: "Terrômetro digital inteligente",
    descricao: "",
    imagem: "/imgs/produtos/prod012.png",
  },
  {
    nome: "Termovisor infravermelho",
    descricao: "",
    imagem: "/imgs/produtos/prod011.png",
  },
  {
    nome: "Megôhmetro digital de 10.000 V a 15.000 V",
    descricao: "Permite controle remoto via tablet",
    imagem: "/imgs/produtos/prod010.png",
  },
  {
    nome: "Smart Hipot DC de até 60 kV",
    descricao: "",
    imagem: "/imgs/produtos/prod009.png",
  },
  {
    nome: "Suporte para micrômetros externos",
    descricao: "",
    imagem: "/imgs/produtos/prod008.png",
  },
  {
    nome: "Micrômetro externo",
    descricao: "Digital e analógico",
    imagem: "/imgs/produtos/prod007.png",
  },
  {
    nome: "Relógio apalpador",
    descricao: "",
    imagem: "/imgs/produtos/prod006.png",
  },
  {
    nome: "Calibre de solda",
    descricao: "",
    imagem: "/imgs/produtos/prod005.png",
  },
  {
    nome: "Jogos micrômetros internos digitais 3 pontas",
    descricao: "",
    imagem: "/imgs/produtos/prod004.png",
  },
  {
    nome: "Esquadros",
    descricao: "",
    imagem: "/imgs/produtos/prod003.png",
  },
  {
    nome: "Relógios comparadores digitais e analógicos",
    descricao: "",
    imagem: "/imgs/produtos/prod002.png",
  },
  {
    nome: "Paquímetros digitais e analógicos",
    descricao: "",
    imagem: "/imgs/produtos/prod001.png",
  },
];

export default function Produtos() {
  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative h-screen w-full overflow-hidden">

        <div
            className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
            "
            style={{
            backgroundImage: "url('/imgs/imi/labFisico.jpg')",
            }}
        />
        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            z-10
            bg-black/65
          "
        />


        {/* Header */}

        <div className="relative z-30">
          <Header />
        </div>


        {/* Conteúdo */}

        <div
          className="
            relative
            z-20
            flex
            h-[calc(100%-80px)]
            items-center
            justify-center
            px-4
            text-center
            sm:px-6
            lg:px-8
          "
        >

          <div className="max-w-4xl">

            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-blue-400
              "
            >
              Instrumentação e Metrologia
            </p>

            <h1
              className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Produtos
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-gray-200
                sm:text-lg
                sm:leading-8
              "
            >
              Equipamentos e instrumentos de medição
              selecionados para atender às necessidades
              de profissionais e empresas.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRODUÇÃO
      ========================================================= */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-16
            sm:px-6
            lg:px-8
            lg:py-20
          "
        >

          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                  text-blue-600
                "
              >
                Venda de Instrumentos
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                "
              >
                Equipamentos de medição
              </h2>

              <div className="mt-4 h-1 w-20 bg-blue-600" />

            </div>

            <p
              className="
                max-w-2xl
                text-base
                leading-7
                text-gray-600
              "
            >
              Oferecemos uma variedade de instrumentos,
              equipamentos e acessórios voltados à medição,
              inspeção e controle de qualidade. Nossa equipe
              está disponível para auxiliar na escolha da
              solução mais adequada para sua aplicação.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          PRODUTOS
      ========================================================= */}

      <section
        id="produtos"
        className="
          w-full
          bg-gray-50
          border-y
          border-gray-100
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-16
            sm:px-6
            lg:px-8
            lg:py-20
          "
        >

          {/* Cabeçalho */}

          <div className="mb-10 flex justify-center flex-col items-center">

            <h2
              className="
                text-2xl
                font-bold
                text-gray-900
                sm:text-3xl
                text-center
              "
            >
              Conheça nossos produtos
            </h2>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-gray-500
                text-center
              "
            >
              Consulte alguns dos equipamentos disponíveis
              em nossa linha de produtos.
            </p>

          </div>


          {/* Grid */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
            "
          >

            {produtos.map((produto) => (

              <article
                key={produto.nome}
                className="
                  group
                  flex
                  min-w-0
                  flex-col
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-xl
                "
              >

                {/* Imagem */}

                <div
                  className="
                    relative
                    flex
                    h-52
                    items-center
                    justify-center
                    overflow-hidden
                    bg-white
                    p-5
                  "
                >

                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-contain
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>


                {/* Informações */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    border-t
                    border-gray-100
                    p-5
                  "
                >

                  <h3
                    className="
                      text-sm
                      font-semibold
                      leading-5
                      text-gray-900
                    "
                  >
                    {produto.nome}
                  </h3>


                  {produto.descricao && (

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-gray-500
                      "
                    >
                      {produto.descricao}
                    </p>

                  )}

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

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-blue-400
            "
          >
            Precisa de um equipamento?
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              sm:text-4xl
            "
          >
            Não encontrou o que procura?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-gray-300
              sm:text-lg
              sm:leading-8
            "
          >
            Entre em contato com nossa equipe para consultar
            disponibilidade, especificações e outras opções
            de equipamentos para sua aplicação.
          </p>

          <a
            href="/#contato"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-blue-600
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition
              hover:bg-blue-700
            "
          >
            Fale com nossa equipe
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