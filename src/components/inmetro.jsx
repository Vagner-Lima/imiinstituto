import { IconExternalLink } from "@tabler/icons-react";

export default function Inmetro() {
  return (
    <section className="bg-white">
      <div
        className="
          mx-auto
          flex
          max-w-5xl
          flex-col
          items-center
          px-4
          py-16
          text-center
          sm:px-6
          lg:px-8
          lg:py-20
        "
      >
        {/* Logo */}
        <a
          href="http://www.inmetro.gov.br/laboratorios/rbc/lista_laboratorios.asp?num_certificado=0312&"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acessar o site do INMETRO"
          className="
            mb-6
            transition
            duration-300
            hover:scale-105
          "
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/inmetro.svg"
            alt="INMETRO"
            className="h-32 w-auto"
          />
        </a>

        {/* Conteúdo */}
        <div className="max-w-2xl">
          <h2
            className="
              text-2xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-3xl
            "
          >
            Consulte nosso escopo no{" "}
            <span className="text-blue-600">
              INMETRO
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-gray-600
              sm:text-base
            "
          >
            Consulte o escopo de acreditação e os valores de
            CMC do IMI diretamente no sistema do INMETRO.
          </p>
        </div>

        {/* Botão */}
        <a
          href="http://www.inmetro.gov.br/laboratorios/rbc/lista_laboratorios.asp?num_certificado=0312&"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-7
            inline-flex
            items-center
            gap-2
            rounded-md
            bg-blue-600
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            shadow-sm
            transition
            duration-200
            hover:bg-blue-700
            hover:shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
          "
        >
          Acessar INMETRO

          <IconExternalLink size={17} stroke={1.8} />
        </a>
      </div>
    </section>
  );
}