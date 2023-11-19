import * as React from "react"
import "../../components/filme.css"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const abrirAba = (id) => {
    var abas = document.getElementById("abas").firstElementChild.children
    for(var aba of abas){
        aba.style.backgroundColor = getComputedStyle(document.body).getPropertyValue("--header")
        aba.style.color = getComputedStyle(document.body).getPropertyValue("--text_header")
    }
    document.getElementById(id+"_aba").style.backgroundColor = getComputedStyle(document.body).getPropertyValue("--conteudo")
    document.getElementById(id+"_aba").style.color = getComputedStyle(document.body).getPropertyValue("--text_conteudo")

    var conteudos = document.getElementById("conteudo").children
    for(var conteudo of conteudos){
        conteudo.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

const Filme = ({ data, children }) => {
    return (
        <Layout>
            <img id="capa" src='' alt="" />
            <div id="header">
                <div id="poster">
                    <img src={data.mdx.frontmatter.poster} alt="" />
                </div>
                <div id="filme">
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <p id="info">{data.mdx.frontmatter.date} &#x2022; {data.mdx.frontmatter.paises.join(" / ")} &#x2022; {data.mdx.frontmatter.generos}</p>
                    <p id="sinopse">{data.mdx.frontmatter.sinopse}</p>
                </div>
                <div id="elenco">
                    <p>ELENCO</p>
                    <ul>
                        {
                            data.mdx.frontmatter.cast.map((actor) => (
                                <li>
                                    <img src='' alt=''/>
                                    <p>{actor[0]}</p>
                                    <p>{actor[1]}</p>
                                </li>
                            
                            ))
                        }
                    </ul>
                    <p>FICHA TÉCNICA</p>
                    <ul>
                    {
                            data.mdx.frontmatter.crew.map((actor) => (
                                <li>
                                    <img src='' alt=''/>
                                    <p>{actor[0]}</p>
                                    <p>{actor[1]}</p>
                                </li>
                            
                            ))
                        }
                    </ul>
                </div>
                <div id="abas">
                    <ul>
                        <li onClick={() => abrirAba("estetica")} id="estetica_aba" key="estetica_aba">PROPOSTA ESTÉTICA</li>
                        <li onClick={() => abrirAba("narrativa")} id="narrativa_aba" key="narrativa_aba">NARRATIVA</li>
                    </ul>
                </div>
            </div>
            <div id="conteudo">
                {children}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($id: String){
        mdx(id: {eq: $id}){
            frontmatter{
                title
                date
                sinopse
                paises
                generos
                cast
                crew
                poster
            }
            excerpt
        }
    }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default Filme