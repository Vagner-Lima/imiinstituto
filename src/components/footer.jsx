import {
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconArrowUp,
  IconCopyright,
} from "@tabler/icons-react";

import { Link } from "react-router-dom";
import { whatsappUrl } from "./whatsapp";

export function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function Footer() {
  function getAnoAtual(ano) {
    const anoAtual = new Date().getFullYear();

    return `${ano} - ${anoAtual}`;
  }

  return (
    <footer
      className="
        w-full
        border-t
        border-white/10
        bg-gray-950
        bg-[url('/imgs/footer.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >

      {/* Overlay */}
      <div className="w-full bg-gray-950/95">

        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >

          {/* =====================================================
              CONTEÚDO PRINCIPAL
          ===================================================== */}

          <div
            className="
              grid
              gap-10
              py-10
              md:grid-cols-3
              lg:py-12
            "
          >

            {/* =================================================
                IDENTIDADE
            ================================================= */}

            <div className="flex flex-col items-center text-center md:items-start md:text-left">

              <div className="flex items-center gap-4">

                <img
                  src="/imgs/logo.png"
                  alt="IMI - Instituto de Metrologia Industrial"
                  className="w-28 sm:w-32"
                />

                <div className="h-8 w-px bg-blue-600/70" />

                <img
                  src="/imgs/Selo.png"
                  alt="Selo de acreditação"
                  className="w-20 sm:w-24"
                />

              </div>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-6
                  text-gray-400
                "
              >
                Instituto de Metrologia Industrial.
                <br />
                Excelência em metrologia e instrumentação
                desde 1997.
              </p>

            </div>


            {/* =================================================
                NAVEGAÇÃO
            ================================================= */}

            <div className="text-center md:text-left">

              <h2 className="text-sm font-semibold text-white">
                Navegação
              </h2>

              <nav className="mt-4">

                <ul className="space-y-2.5">

                  <li>
                    <Link
                      to="/"
                      className="
                        text-sm
                        text-gray-400
                        transition-colors
                        hover:text-blue-400
                      "
                    >
                      Início
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/laboratorios"
                      className="
                        text-sm
                        text-gray-400
                        transition-colors
                        hover:text-blue-400
                      "
                    >
                      Laboratórios
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/nr13"
                      className="
                        text-sm
                        text-gray-400
                        transition-colors
                        hover:text-blue-400
                      "
                    >
                      NR-13
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      to="/produtos"
                      className="
                        text-sm
                        text-gray-400
                        transition-colors
                        hover:text-blue-400
                      "
                    >
                      Produtos
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      to="/empresa"
                      className="
                        text-sm
                        text-gray-400
                        transition-colors
                        hover:text-blue-400
                      "
                    >
                      História
                    </Link>
                  </li>

                </ul>

              </nav>

            </div>


            {/* =================================================
                CONTATO
            ================================================= */}

            <div className="text-center md:text-left">

              <h2 className="text-sm font-semibold text-white">
                Contato
              </h2>

              <div className="mt-4 space-y-3">

                {/* WhatsApp */}

                <a
                  href={whatsappUrl(
                    "Olá! Vim pelo site e gostaria de saber mais sobre os serviços do IMI."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    text-sm
                    text-gray-400
                    transition-colors
                    hover:text-green-400
                    md:justify-start
                  "
                >
                  <IconBrandWhatsapp size={18} />

                  <span>(21) 98072-4943</span>
                </a>


                {/* E-mail */}

                <a
                  href="mailto:usitec.lab@uol.com.br"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    text-sm
                    text-gray-400
                    transition-colors
                    hover:text-blue-400
                    md:justify-start
                  "
                >
                  <IconMail size={18} />

                  <span>usitec.lab@uol.com.br</span>
                </a>


                {/* Endereço */}

                <a
                  href="https://maps.app.goo.gl/TS4bTCLe6uHZEBSN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-start
                    justify-center
                    gap-3
                    text-sm
                    leading-5
                    text-gray-400
                    transition-colors
                    hover:text-red-400
                    md:justify-start
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


          {/* =====================================================
              RODAPÉ INFERIOR
          ===================================================== */}

          <div
            className="
              flex
              flex-col
              gap-4
              border-t
              border-white/10
              py-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Copyright */}

            <p
              className="
                flex
                items-center
                justify-center
                gap-1.5
                text-xs
                text-gray-500
                sm:justify-start
                sm:text-sm
              "
            >
              <IconCopyright size={15} />

              {getAnoAtual(1997)}

              <span>
                IMI - Instituto de Metrologia Industrial.
              </span>
            </p>


            {/* Links */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-5
                sm:justify-end
              "
            >

              <Link
                to="/privacidade"
                className="
                  text-xs
                  text-gray-500
                  transition-colors
                  hover:text-white
                  sm:text-sm
                "
              >
                Privacidade
              </Link>

              <Link
                to="/termos"
                className="
                  text-xs
                  text-gray-500
                  transition-colors
                  hover:text-white
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
                  text-gray-500
                  transition-colors
                  hover:text-blue-400
                  sm:text-sm
                "
              >
                Topo

                <IconArrowUp size={15} />

              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

