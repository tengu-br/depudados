import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CtaOne = () => {
  return (
    <section className="border-top pt-110">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="download-app-inner text-center">
              <h1 className="h1">
                Desafios e Conquistas
              </h1>
              <h4 style={{ marginBottom: '1em', marginTop: '4em' }}>
                Primeiros problemas:
              </h4>
              <p>
                A princípio eu havia planejado chamar a API pública do governo direto do front-end a fim
                de agilizar o processo de desenvolvimento. Porém percebi que a performance e experiência
                de usuário estavam sendo afetadas pelo grande número de chamadas e consequente tempo de espera.
                Para solucionar isso, acabei optando por criar um back-end que pré-processasse os dados e
                os armazenasse em um banco de dados.
              </p>
              <h4 style={{ marginBottom: '1em', marginTop: '2em' }}>
                Maior desafio:
              </h4>
              <p>
                Sem dúvidas o tempo foi o maior obstáculo. Só encontrei o anúncio da vaga quando fui compartilhar
                um post do perfil do instagram do Nexo e vi o highlight. Ao mesmo tempo que queria entregar um
                projeto bacana, estava (e ainda estou) com receio de demorar de mais e encontrar todas as vagas
                preenchidas! Esse foi um fator determinante para várias decisões feitas para a execução do projeto,
                mas que podem (e gostaria que fossem) melhoradas.
              </p>
              <p>
                Um exemplo disso é a maneira ineficaz da coleta de dados. Atualmente o back-end atualiza todos os dados
                uma vez por dia e sobrescreve os dados antigos. Isso pode ser melhorado com uma metodologia semelhante
                ao do git, onde apenas as mudanças são atualizadas e registradas, e não todo o código - ou nesse caso, dados.
              </p>
              <h4 style={{ marginBottom: '1em', marginTop: '2em' }}>
                Ideias não exploradas:
              </h4>
              <p>
                Já que os dados são todos atualizados apenas uma vez por dia, seria interessante implementar um CI/CD onde
                após a coleta de dados, eles fossem armazenados dentro do next.js e o site fosse 'buildado' novamente tratando
                esses dados recentes como dados estáticos. Isso possibilitaria uma configuração de SSR completa, navegação
                extremamente rápida e a inutilização do banco de dados atual.
              </p>
              <h4 style={{ marginBottom: '1em', marginTop: '2em' }}>
                Conquistas:
              </h4>
              <p>
                Apesar desses detalhes, considero que o projeto foi bem sucedido em sua proposta. Eu mesmo, como usuário, consegui
                visualizar dados que não conhecia. Por exemplo: partidos de esquerda tendem a ser mais ativos na câmara, com mais
                projetos de lei, propostas de emenda à constituição, petições e etc... Ao ver o mapa de gastos também fica claro que
                estados mais distantes do Distrito Dederal tem um gasto maior devido às passagens aéreas mais caras. Um terceiro ponto
                chocante é que nos últimos trinta dias 52 deputados não tiveram participação em nenhuma proposição da câmara!
              </p>
              <h4 style={{ marginBottom: '1em', marginTop: '2em' }}>
                Melhorias futuras:
              </h4>
              <p style={{ marginBottom: '4em' }}>
                O céu é o limite! As principais mudanças a serem feitas são:
              <ul style={{ textAlign: 'left', marginTop: '1em', marginBottom: '1em' }}>
                  <li style={{ listStyleType: 'square' }}>Sorteio de exibição no caso de empate (nos cards de Sempre Presente, Mais Austero e Menos Ativo)</li>
                  <li style={{ listStyleType: 'square' }}>Adicionar exibição de cada gasto e cada proposição de acordo com os filtros da página</li>
                  <li style={{ listStyleType: 'square' }}>Melhorar a visualização dos dados, com mais fotos, legendas e explicações</li>
                  <li style={{ listStyleType: 'square' }}>Criar uma funcionalidade de "Comparar" (tanto para Partidos quanto para Deputados)</li>
                  <li style={{ listStyleType: 'square' }}>Refatorar partes do código que são redundantes</li>
                  <li style={{ listStyleType: 'square' }}>Adicionar mais tipos de dados (como votações e tendencias políticas)</li>
                </ul>
                <li >.</li>
                <li >.</li>
                <li >.</li>
                E muito mais!
              </p>
              <a href="/presenca" className="btn">
                Navegar!
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaOne;
