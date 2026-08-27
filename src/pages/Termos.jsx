import Footer from "../components/footer";
import { IconCircleArrowLeft } from "@tabler/icons-react";

export default function termos() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        <a className="text-gray-900 flex items-center" href="/"><IconCircleArrowLeft/>Voltar</a>

        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            IMI - Instituto de Metrologia Industrial
          </span>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Termos e Condições
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Última atualização: agosto de 2026
          </p>
        </div>

        <div className="space-y-8 text-base leading-7 text-gray-700">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              1. Aceitação dos termos
            </h2>

            <p>
              Ao acessar e utilizar este site, o usuário declara estar de
              acordo com estes Termos e Condições. Caso não concorde com
              qualquer disposição, recomendamos que não utilize o site.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              2. Utilização do site
            </h2>

            <p>
              O conteúdo disponibilizado neste site possui finalidade
              institucional e informativa sobre o IMI, seus serviços,
              laboratórios e atividades.
            </p>

            <p className="mt-3">
              O usuário compromete-se a utilizar o site de forma adequada,
              respeitando a legislação vigente e os direitos de terceiros.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              3. Conteúdo e informações
            </h2>

            <p>
              O IMI busca manter as informações apresentadas no site
              atualizadas e corretas. Entretanto, determinadas informações
              poderão ser alteradas, atualizadas ou removidas sem aviso
              prévio.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              4. Propriedade intelectual
            </h2>

            <p>
              Textos, imagens, logotipos, elementos gráficos e demais
              conteúdos disponibilizados neste site são protegidos pela
              legislação aplicável e não devem ser reproduzidos ou utilizados
              comercialmente sem autorização.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              5. Links externos
            </h2>

            <p>
              O site poderá disponibilizar links para páginas e serviços de
              terceiros. O IMI não se responsabiliza pelo conteúdo, políticas
              ou práticas desses sites externos.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              6. Área do cliente
            </h2>

            <p>
              Determinadas funcionalidades poderão exigir autenticação.
              O usuário é responsável pela confidencialidade de suas
              credenciais de acesso e pelas atividades realizadas utilizando
              sua conta.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              7. Limitação de responsabilidade
            </h2>

            <p>
              O IMI emprega esforços para garantir a disponibilidade e
              segurança do site, porém não garante que o serviço permanecerá
              livre de interrupções, falhas técnicas ou indisponibilidades
              temporárias.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              8. Alterações
            </h2>

            <p>
              Estes Termos e Condições poderão ser atualizados periodicamente
              para refletir mudanças nos serviços, na legislação ou nas
              práticas do IMI.
            </p>
          </section>


          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              9. Contato
            </h2>

            <p>
              Para dúvidas relacionadas a estes termos, entre em contato:
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