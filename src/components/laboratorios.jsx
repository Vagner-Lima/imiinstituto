const lab = [
  {
    nome: "Laboratório Dimensional",
    imagem: "./imgs/imi/labDimensional.jpg",
    link: "/laboratorios/dimensional",
  },
  {
    nome: "Laboratório de Eletricidade",
    imagem: "./imgs/imi/labEletrica.jpg",
    link: "/laboratorios/eletricidade/",
  },
  {
    nome: "Laboratório de Pressão",
    imagem: "./imgs/imi/labPressao.jpg",
    link: "/laboratorios/pressao/",
  },
  {
    nome: "Laboratório de Temperatura e Umidade",
    imagem: "./imgs/imi/labTemp.jpg",
    link: "/laboratorios/temperatura/",
  },
  {
    nome: "Laboratório de Força, Torque e Dureza",
    imagem: "./imgs/imi/labTorque.jpg",
    link: "/laboratorios/forca/",
  },
];

export default function Laboratorios() {
  return (
    <section
      id="laboratorios"
      className="w-screen px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >

      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
            Conheça nossos{" "}
            <span className="text-blue-600">
              Laboratórios
            </span>
          </h2>

          <div className="mt-3 h-1 w-20 bg-blue-600" />
        </div>

        <p className="max-w-lg text-gray-600">
          Nossos laboratórios são reconhecidos pela
          excelência tecnológica e pelo alto padrão
          de qualidade.
        </p>

      </div>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

        {lab.map((laboratorio) => (

          <a
            key={laboratorio.nome}
            href={laboratorio.link}
            className="group"
          >

            <div className="relative overflow-hidden rounded-lg shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <img
                src={laboratorio.imagem}
                alt={laboratorio.nome}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 md:h-64"
              />

              <div className="absolute inset-x-0 bottom-0 bg-black/75 px-5 py-4">

                <p className="text-sm font-medium text-white">
                  {laboratorio.nome}
                </p>

              </div>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}