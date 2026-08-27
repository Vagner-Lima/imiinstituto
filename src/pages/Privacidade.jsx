import { IconCircleArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="mb-10">
              
            <a className="text-gray-900 flex items-center" href="/"><IconCircleArrowLeft/>Voltar</a>
          
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            IMI - Instituto de Metrologia Industrial
          </span>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Política de Privacidade
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Última atualização: agosto de 2026
          </p>
        </div>

        <div className="space-y-8 text-base leading-7 text-gray-700">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              1. Introdução
            </h2>

            <p>
              O IMI - Instituto de Metrologia Industrial valoriza a
              privacidade e a segurança das informações de seus clientes,
              parceiros e visitantes.
            </p>

            <p className="mt-3">
              Esta Política de Privacidade explica, de forma transparente,
              como as informações fornecidas por meio deste site podem ser
              utilizadas e protegidas.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              2. Informações coletadas
            </h2>

            <p>
              Podemos coletar informações fornecidas voluntariamente pelo
              usuário ao entrar em contato conosco, solicitar informações
              sobre nossos serviços ou utilizar funcionalidades
              disponibilizadas pelo site.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              3. Utilização das informações
            </h2>

            <p>
              As informações poderão ser utilizadas para:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Responder solicitações e mensagens;</li>
              <li>Prestar e melhorar nossos serviços;</li>
              <li>Entrar em contato quando necessário;</li>
              <li>Manter a segurança e funcionamento do site;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              4. Compartilhamento de informações
            </h2>

            <p>
              O IMI não comercializa informações pessoais. O compartilhamento
              de informações poderá ocorrer quando necessário para a execução
              de serviços, cumprimento de obrigações legais ou atendimento de
              determinações de autoridades competentes.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              5. Segurança
            </h2>

            <p>
              Adotamos medidas técnicas e administrativas destinadas a
              proteger as informações contra acessos não autorizados,
              alterações, divulgação ou destruição indevida.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              6. Cookies
            </h2>

            <p>
              Este site poderá utilizar recursos técnicos necessários para
              seu funcionamento. Caso sejam utilizados cookies ou tecnologias
              semelhantes, sua finalidade será informada de acordo com a
              legislação aplicável.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              7. Direitos do titular
            </h2>

            <p>
              O titular dos dados poderá exercer os direitos previstos na
              legislação aplicável, incluindo solicitações relacionadas ao
              acesso, correção ou tratamento de seus dados pessoais.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              8. Contato
            </h2>

            <p>
              Para dúvidas ou solicitações relacionadas à privacidade e ao
              tratamento de dados pessoais, entre em contato conosco:
            </p>

            <a
              href="mailto:usitec.lab@uol.com.br"
              className="mt-3 inline-block font-medium text-blue-600 transition hover:text-blue-800"
            >
              usitec.lab@uol.com.br
            </a>
          </section>

        </div>

      </section>

      <Footer/>

    </main>
  );
}