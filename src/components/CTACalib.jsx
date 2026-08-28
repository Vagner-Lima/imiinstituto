import { useState } from "react";

import {
  IconArrowRight,
  IconPhone,
} from "@tabler/icons-react";

import { whatsappUrl } from "./whatsapp";

export default function CTACalib() {
  const [formulario, setFormulario] = useState({
    nome: "",
    empresa: "",
    cnpj: "",
    instrumento: "",
    laboratorio: "",
    servico: "",
    observacoes: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormulario((estado) => ({
      ...estado,
      [name]: value,
    }));
  }

  function enviarWhatsApp(e) {
    e.preventDefault();

    const mensagem = `
Olá! Vim pelo site do IMI e gostaria de solicitar informações sobre um serviço de calibração.

*Dados do contato*

Nome: ${formulario.nome}
Empresa: ${formulario.empresa}
CNPJ: ${formulario.cnpj || "Não Informado"} 

*Instrumento(s)*

Instrumento: ${formulario.instrumento || "Não Informado"}
Laboratório / Grandeza: ${formulario.laboratorio || "Não Informado"}
Serviço desejado: ${formulario.servico || "Não Informado"}

Observações:
${formulario.observacoes || "Não informado"}

Gostaria de receber informações sobre disponibilidade, prazo e orçamento.
    `.trim();

    window.open(
      whatsappUrl(mensagem),
      "_blank",
      "noopener,noreferrer"
    );
  }

  function formatarCNPJ(valor) {
  const numeros = valor.replace(/\D/g, "").slice(0, 14);

  return numeros
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

  return (
    <section className="bg-gray-900 text-white">

      <div
        className="
          px-4
          py-12
          sm:px-6
          lg:px-8
        "
      >

        {/* =====================================================
            TÍTULO
        ===================================================== */}

        <div className="mx-auto max-w-2xl text-center">

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
              mt-4
              text-lg
              leading-8
              text-gray-300
            "
          >
            Preencha algumas informações e nossa equipe
            poderá entender melhor sua necessidade.
          </p>

        </div>


        {/* =====================================================
            FORMULÁRIO
        ===================================================== */}

        <form
          onSubmit={enviarWhatsApp}
          className="
            mx-auto
            mt-10
            max-w-3xl
            rounded-2xl
            border
            border-white/10
            bg-white/3
            p-6
            shadow-2xl
            sm:p-8
          "
        >

          <div className="grid gap-6 sm:grid-cols-2">

            {/* Nome */}

            <div>

              <label
                htmlFor="nome"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Nome *
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                required
                value={formulario.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                className="
                  h-11
                  w-full
                  rounded-md
                  border
                  border-white/10
                  bg-gray-900
                  px-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  focus:border-blue-500
                  focus:ring-1
                  focus:ring-blue-500
                "
              />

            </div>


            {/* Empresa */}

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label
                    htmlFor="empresa"
                    className="mb-2 block text-sm font-medium text-gray-200"
                    >
                    Nome da empresa
                    </label>

                    <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nome da empresa"
                    className="
                        w-full
                        bg-gray-900
                        rounded-md
                        border
                        border-white/10
                        px-4
                        py-3
                        text-white
                        placeholder:text-gray-400
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-1
                        focus:ring-blue-500
                    "
                    />
                </div>

                <div>
                    <label
                        htmlFor="cnpj"
                        className="mb-2 block text-sm font-medium text-gray-200"
                    >
                        CNPJ
                    </label>

                    <input
                        id="cnpj"
                        name="cnpj"
                        type="text"
                        inputMode="numeric"
                        maxLength={18}
                        value={formulario.cnpj}
                        onChange={(e) =>
                        setFormulario((estado) => ({
                            ...estado,
                            cnpj: formatarCNPJ(e.target.value),
                        }))
                        }
                        placeholder="00.000.000/0000-00"
                        className="
                        w-full
                        rounded-md
                        border
                        border-white/10
                        bg-gray-900
                        px-4
                        py-3
                        text-white
                        placeholder:text-gray-400
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-1
                        focus:ring-blue-500
                        "
                    />
                    </div>
                </div>


            {/* Instrumento */}

            <div>

              <label
                htmlFor="instrumento"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Instrumento(s) *
              </label>

              <input
                id="instrumento"
                name="instrumento"
                type="text"
                required
                value={formulario.instrumento}
                onChange={handleChange}
                placeholder="Ex.: Paquímetro, manômetro..."
                className="
                  h-11
                  w-full
                  rounded-md
                  border
                  border-white/10
                  bg-gray-900
                  px-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  focus:border-blue-500
                  focus:ring-1
                  focus:ring-blue-500
                "
              />

            </div>


            {/* Laboratório */}

            <div>

              <label
                htmlFor="laboratorio"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Grandeza / Laboratório *
              </label>

              <select
                id="laboratorio"
                name="laboratorio"
                required
                value={formulario.laboratorio}
                onChange={handleChange}
                className="
                  h-11
                  w-full
                  rounded-md
                  border
                  border-white/10
                  bg-gray-900
                  px-4
                  text-sm
                  text-white
                  outline-none
                  focus:border-blue-500
                  focus:ring-1
                  focus:ring-blue-500
                "
              >

                <option value="">
                  Selecione uma opção
                </option>

                <option value="Múltiplas Grandezas">
                  Múltiplas Grandezas
                </option>

                <option value="Dimensional">
                  Dimensional
                </option>

                <option value="Eletricidade">
                  Eletricidade
                </option>

                <option value="Pressão">
                  Pressão
                </option>

                <option value="Temperatura e Umidade">
                  Temperatura e Umidade
                </option>

                <option value="Força, Torque e Dureza">
                  Força, Torque e Dureza
                </option>

                <option value="Físico-Químico">
                  Físico-Químico
                </option>

                <option value="Tempo e Frequência">
                  Tempo e Frequência
                </option>

                <option value="Gás">
                  Gás
                </option>

                <option value="Massa">
                  Massa
                </option>

                <option value="Não sei informar">
                  Não sei informar
                </option>

              </select>

            </div>


            {/* Serviço */}

            <div className="sm:col-span-2">

              <label
                htmlFor="servico"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Serviço desejado *
              </label>

              <select
                id="servico"
                name="servico"
                required
                value={formulario.servico}
                onChange={handleChange}
                className="
                  h-11
                  w-full
                  rounded-md
                  border
                  border-white/10
                  bg-gray-900
                  px-4
                  text-sm
                  text-white
                  outline-none
                  focus:border-blue-500
                  focus:ring-1
                  focus:ring-blue-500
                "
              >

                <option value="">
                  Selecione uma opção
                </option>

                <option value="Calibração">
                  Calibração
                </option>

                <option value="Ensaio">
                  Ensaio
                </option>

                <option value="Inspeção">
                  Inspeção
                </option>

                <option value="Calibração e ensaio">
                  Calibração e ensaio
                </option>

                <option value="Não sei informar">
                  Não sei informar
                </option>

              </select>

            </div>


            {/* Observações */}

            <div className="sm:col-span-2">

              <label
                htmlFor="observacoes"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Observações
              </label>

              <textarea
                id="observacoes"
                name="observacoes"
                value={formulario.observacoes}
                onChange={handleChange}
                rows={4}
                placeholder="Informe modelo, faixa de medição, quantidade de instrumentos ou outras informações."
                className="
                  w-full
                  resize-none
                  rounded-md
                  border
                  border-white/10
                  bg-gray-900
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  focus:border-blue-500
                  focus:ring-1
                  focus:ring-blue-500
                "
              />

            </div>

          </div>


          {/* =====================================================
              BOTÃO
          ===================================================== */}

          <div className="mt-8 flex justify-center">

            <button
              type="submit"
              className="
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
                shadow-lg
                transition
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2
                focus:ring-offset-gray-950
              "
            >

              <IconPhone size={20} />

              Solicitar orçamento pelo WhatsApp

              <IconArrowRight size={20} />

            </button>

          </div>

          <p className="mt-4 text-center text-xs text-gray-500">
            Ao enviar, você será direcionado ao WhatsApp para
            concluir o contato com nossa equipe.
          </p>

        </form>

      </div>

    </section>
  );
}