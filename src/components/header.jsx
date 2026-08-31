import { useState } from "react";

import {
  IconMenu2,
  IconX,
  IconUser,
} from "@tabler/icons-react";

import { Link } from "react-router-dom";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="relative z-50">
      <nav
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          justify-between
          px-4
          py-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="IMI - Página inicial"
          className="shrink-0"
          onClick={fecharMenu}
        >
          <img
            src="/imgs/logo.png"
            alt="IMI - Instituto de Metrologia Industrial"
            className="w-14 sm:w-20"
          />
        </Link>

        {/* =====================================================
            MENU DESKTOP
        ====================================================== */}
        <div className="hidden items-center gap-8 lg:flex">

          <ul className="flex items-center gap-8 text-gray-100">

            <li>
              <Link
                to="/"
                className="
                  font-medium
                  transition-colors
                  duration-200
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
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-blue-400
                "
              >
                Laboratórios
              </Link>
            </li>

            <li>
              <Link
                to="/produtos"
                className="
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-blue-400
                "
              >
                Produtos
              </Link>
            </li>

            <li>
              <Link
                to="/empresa"
                className="
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-blue-400
                "
              >
                História
              </Link>
            </li>

          </ul>

          {/* Área do cliente - EXTERNA */}
          <a
            href="https://relatorios.imiinstituto.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-md
              bg-blue-600
              px-5
              font-medium
              text-white
              shadow-md
              transition
              duration-200
              hover:bg-blue-700
              hover:shadow-lg
            "
          >
            <IconUser size={20} />

            Área do Cliente
          </a>

        </div>

        {/* =====================================================
            BOTÃO MOBILE
        ====================================================== */}
        <button
          type="button"
          aria-label={
            menuAberto
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={menuAberto}
          onClick={() =>
            setMenuAberto((estado) => !estado)
          }
          className="
            rounded-md
            p-2
            text-white
            transition
            hover:bg-white/10
            lg:hidden
          "
        >
          {menuAberto ? (
            <IconX size={28} />
          ) : (
            <IconMenu2 size={28} />
          )}
        </button>

      </nav>

      {/* =====================================================
          MENU MOBILE
      ====================================================== */}
      {menuAberto && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            border-t
            border-white/10
            bg-gray-900/95
            shadow-xl
            backdrop-blur-md
            lg:hidden          
            "
        >
          <nav
            className="
              px-4
              py-6
              sm:px-6
            "
            aria-label="Menu mobile"
          >
            <ul className="space-y-2">

              <li>
                <Link
                  to="/"
                  onClick={fecharMenu}
                  className="
                    block
                    rounded-md
                    px-3
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  Início
                </Link>
              </li>

              <li>
                <Link
                  to="/laboratorios"
                  onClick={fecharMenu}
                  className="
                    block
                    rounded-md
                    px-3
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  Laboratórios
                </Link>
              </li>

              <li>
                <Link
                  to="/produtos"
                  onClick={fecharMenu}
                  className="
                    block
                    rounded-md
                    px-3
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  Produtos
                </Link>
              </li>

              <li>
                <Link
                  to="/empresa"
                  onClick={fecharMenu}
                  className="
                    block
                    rounded-md
                    px-3
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  História
                </Link>
              </li>

              <li className="pt-2">

                {/* Área do cliente - EXTERNA */}
                <a
                  href="https://relatorios.imiinstituto.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={fecharMenu}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-blue-600
                    px-5
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  <IconUser size={20} />

                  Área do Cliente
                </a>

              </li>

            </ul>
          </nav>
        </div>
      )}

    </header>
  );
}
