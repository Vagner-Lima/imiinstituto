export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-white"
    >
      <div
        className="
          flex
          flex-col
          justify-center
          items-center
          px-4
          py-12
          sm:px-6
          lg:px-8
          lg:py-12
        "
      >
        {/* Cabeçalho */}
        <div className="justify-center flex flex-col items-center">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-blue-600
            "
          >
            Sobre o IMI
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
            Experiência e confiança em
            <span className="text-blue-600">
              {" "}metrologia
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              sm:text-lg
            "
          >
            Há décadas contribuindo para a precisão,
            confiabilidade e segurança dos processos
            industriais.
          </p>
        </div>

        {/* Conteúdo */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* Vídeo */}
          <div
            className="
              overflow-hidden
              rounded-xl
              bg-white
              shadow-sm
            "
          >
            <video
              className="
                aspect-video
                h-full
                w-full
                object-cover
              "
              controls
              preload="metadata"
            >
              <source
                src="/imgs/videoimi.mp4"
                type="video/mp4"
              />

              Seu navegador não suporta vídeos HTML5.
            </video>
            </div>
        

          {/* História */}
          <div>
            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
                text-gray-900
              "
            >
              Nossa história
            </h3>

            <div
              className="
                mt-5
                space-y-4
                text-base
                leading-7
                text-gray-600
              "
            >
              <p>
                O{" "}
                <strong className="font-semibold text-gray-900">
                  IMI – Instituto de Metrologia Industrial
                </strong>{" "}
                foi fundado em 1997 com o objetivo de
                oferecer serviços de excelência nas áreas
                de metrologia e instrumentação.
              </p>

              <p>
                Ao longo de sua trajetória, o IMI construiu
                uma sólida experiência atendendo empresas
                de diferentes segmentos da indústria,
                incluindo os setores metalúrgico,
                construção civil, eletrônico e,
                principalmente, petrolífero.
              </p>

              <p>
                Desde 2002, o departamento de engenharia
                também atua na área de{" "}
                <strong className="font-semibold text-gray-900">
                  Engenharia NR 13
                </strong>
                , realizando inspeções e serviços
                relacionados a caldeiras, tanques e vasos
                de pressão.
              </p>
            </div>

            {/* Informações */}
            
          </div>
          </div>
          </div>
        </section>

  );
}