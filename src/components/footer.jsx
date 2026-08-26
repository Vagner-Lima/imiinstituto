import {
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconArrowUp,
} from "@tabler/icons-react";

import { url } from "./whatsapp";

import { Link } from "react-router-dom";

export default function Footer() {
  function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="border-t border-gray-200 bg-white bg-">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            CONTEÚDO PRINCIPAL
        ========================================================= */}

        <div
          className="
            grid
            py-3
            md:grid-cols-3
            lg:py-5
            bg-gray-950/80
            w-screen
          "
        >

          {/* Identidade */}

          <div>

            <div className="flex items-center gap-4 justify-center">

              <img
                src="/imgs/Logo_.png"
                alt="IMI - Instituto de Metrologia Industrial"
                className="w-32"
              />

              <div className="h-8 w-px bg-gray-200" />

              <img
                src="/imgs/Selo.png"
                alt="Selo de acreditação"
                className="w-25"
              />

            </div>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-gray-500
              "
            >
              Instituto de Metrologia Industrial.
              Excelência em metrologia e instrumentação
              desde 1997.
            </p>

          </div>


          {/* Navegação */}

          <div>

            <h2 className="text-sm font-semibold text-gray-900">
              Navegação
            </h2>

            <nav className="mt-4">

              <ul className="space-y-2.5">

                <li>
                  <Link
                    to="/"
                    className="
                      text-sm
                      text-gray-500
                      transition-colors
                      hover:text-blue-600
                    "
                  >
                    Início
                  </Link>
                </li>

                <li>
                  <Link
                    to="/laboratorios/"
                    className="
                      text-sm
                      text-gray-500
                      transition-colors
                      hover:text-blue-600
                    "
                  >
                    Laboratórios
                  </Link>
                </li>

                <li>
                  <Link
                    to="/produtos/"
                    className="
                      text-sm
                      text-gray-500
                      transition-colors
                      hover:text-blue-600
                    "
                  >
                    Produtos
                  </Link>
                </li>

                <li>
                  <Link
                    to="/empresa/"
                    className="
                      text-sm
                      text-gray-500
                      transition-colors
                      hover:text-blue-600
                    "
                  >
                    História
                  </Link>
                </li>

                <li>
                  <Link
                    to="/nr13/"
                    className="
                      text-sm
                      text-gray-500
                      transition-colors
                      hover:text-blue-600
                    "
                  >
                    NR 13
                  </Link>
                </li>

              </ul>

            </nav>

          </div>


          {/* Contato */}

          <div>

            <h2 className="text-sm font-semibold text-gray-900">
              Contato
            </h2>

            <div className="mt-4 space-y-3">

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-gray-500
                  transition-colors
                  hover:text-green-600
                "
              >
                <IconBrandWhatsapp size={18} />

                (21) 98072-4943
              </a>


              <a
                href="mailto:usitec.lab@uol.com.br"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-gray-500
                  transition-colors
                  hover:text-blue-600
                "
              >
                <IconMail size={18} />

                usitec.lab@uol.com.br
              </a>


              <a
                href="https://maps.app.goo.gl/TS4bTCLe6uHZEBSN6"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-5
                  text-gray-500
                  transition-colors
                  hover:text-blue-600
                "
              >
                <IconMapPin
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  R. Luís Lemos Caldas, 13
                  <br />
                  Rio de Janeiro - RJ
                </span>

              </a>

            </div>

          </div>

        </div>


        {/* =========================================================
            RODAPÉ INFERIOR
        ========================================================= */}

        <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-gray-200
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p className="text-xs text-gray-400 sm:text-sm">
            © 1997–2026 IMI - Instituto de Metrologia Industrial.
          </p>


          <div className="flex items-center gap-5">

            <Link
              to="/privacidade"
              className="
                text-xs
                text-gray-400
                transition-colors
                hover:text-gray-700
                sm:text-sm
              "
            >
              Privacidade
            </Link>

            <Link
              to="/termos"
              className="
                text-xs
                text-gray-400
                transition-colors
                hover:text-gray-700
                sm:text-sm
              "
            >
              Termos
            </Link>

            <button
              type="button"
              onClick={voltarAoTopo}
              aria-label="Voltar ao topo"
              className="
                flex
                items-center
                gap-1.5
                text-xs
                text-gray-400
                transition-colors
                hover:text-blue-600
                sm:text-sm
              "
            >
              Topo
              <IconArrowUp size={15} />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}