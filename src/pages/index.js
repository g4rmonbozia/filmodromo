import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Bem-vindo ao Filmódromo</h1>
      <div>
        <p>O Filmódromo foi um projeto que surgiu em 2020, durante o lockdwon, entre um grupo de amigos amantes de cinema que queriam brincar de contar histórias através do olhar do audiovisual. Desde então, mais de 50 filmes foram idealizados e uma oficina de roteiro foi desenvolvida para refinar a escrita de suas ideias.</p>
        <p>Nesse site, você pode encontrar alguns dos filmes idealizados no projeto e enviar uma proposta de filme para ser analisada posteriormente.</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
