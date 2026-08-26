import { IconChevronDown } from "@tabler/icons-react";

export default function Hero() {
  function scrollDown() {
    document
      .getElementById("laboratorios")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  return (
    <section
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

        <h1
          className="
            text-3xl
            font-bold
            leading-tight
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          <span className="font-extrabold text-blue-500">
            Excelência em Metrologia
          </span>

          <br />

          Confiança em Cada Medição
        </h1>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-relaxed
            text-gray-200
            sm:text-xl
          "
        >
          Precisão, confiabilidade e excelência para
          garantir resultados seguros e rastreáveis.
        </p>

        <button
          type="button"
          onClick={scrollDown}
          aria-label="Conheça nossos laboratórios"
          className="
            mt-10
            animate-bounce
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
    </section>
  );
}