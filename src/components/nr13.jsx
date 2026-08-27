import {
  IconArrowRight
} from "@tabler/icons-react";

export default function NR13() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gray-950
        text-white
      "
    >
      {/* Imagem de fundo */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          opacity-30
        "
        style={{
          backgroundImage: "url('/imgs/banner.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-950/70" />

      {/* Conteúdo */}
      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
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

        {/* Título */}
        <h2
          className="
            max-w-3xl
            text-2xl
            font-bold
            leading-tight
            tracking-tight
            sm:text-3xl
            lg:text-4xl
          "
        >
          Inspeção de Caldeiras, Tanques e
          <br className="hidden sm:block" /> Vasos de Pressão{" "}
          <span className="text-blue-500">
            NR 13
          </span>
        </h2>

        {/* Texto */}
        <div
          className="
            mt-6
            max-w-3xl
            space-y-4
            text-sm
            leading-7
            text-gray-300
            sm:text-base
          "
        >
          <p>
            Desde 2002, nosso departamento de engenharia
            atua na área de{" "}
            <strong className="font-semibold text-white">
              Engenharia NR 13
            </strong>
            , oferecendo serviços de inspeção e calibração
            para empresas de diversos segmentos.
          </p>

          <p>
            Nossa equipe é qualificada e experiente para
            garantir a conformidade dos equipamentos com os
            requisitos e normas aplicáveis à NR 13.
          </p>
        </div>

        {/* Botões */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            sm:w-auto
            sm:flex-row
          "
        >
          <a
            href="/nr13/"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-md
              bg-blue-600
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition
              duration-200
              hover:bg-blue-700
              sm:w-auto
            "
          >
            Saiba mais

            <IconArrowRight size={18} stroke={1.8} />
          </a>

          <a
            href="https://wa.me/5521980724943?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20NR%2013."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-md
              border
              border-white/20
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition
              duration-200
              hover:border-white/40
              hover:bg-white/10
              sm:w-auto
            "
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}