import * as React from "react"
import "./style.css"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Pessoa from "../../components/pessoa"

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
            <img id="capa" src={data.mdx.frontmatter.capa} alt="" />
            <div id="header">
                <div id="poster">
                    <img src={data.mdx.frontmatter.poster} alt="" />
                </div>
                <div id="filme">
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <p id="info">{data.mdx.frontmatter.date} &#x2022; {data.mdx.frontmatter.paises.join(" / ")} &#x2022; {data.mdx.frontmatter.generos.join(" / ")}</p>
                    <p id="sinopse">{data.mdx.frontmatter.sinopse}</p>
                </div>
                <div id="elenco">
                    <p>ELENCO</p>
                    <ul>
                        {
                            data.mdx.frontmatter.cast.map((actor) => (
                                <li>
                                    <Pessoa id={actor[0]} func={actor[1]}></Pessoa>
                                </li>
                            
                            ))
                        }
                    </ul>
                    <p>FICHA TÉCNICA</p>
                    <ul>
                    {
                            data.mdx.frontmatter.crew.map((person) => (
                                <li>
                                    <Pessoa id={person[0]} func={person[1]}></Pessoa>
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
                capa
            }
            excerpt
        }
    }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default Filme