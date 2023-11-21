import * as React from "react"
import "./style.css"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"


const FilmesPage = () => {

    const data = useStaticQuery(graphql`
        query{
            allMdx{
                nodes{
                frontmatter{
                    title
                    date
                    poster
                    slug
                }
                id
                }
            }
        }
        `
    )

    return (
        <Layout>
            <div id="content">
                <p>Aqui estão alguns dos filmes idealizados:</p>
                <div id="producoes">
                {
                    data.allMdx.nodes.map((node) =>(
                        <div className="poster" style={{backgroundImage: 'url(' + node.frontmatter.poster + ')'}}>
                            <Link to={'/filmes/' + node.frontmatter.slug}><span style={{textDecoration: 'none'}}>{node.frontmatter.title}</span></Link>      
                        </div>
                    ))
                }
                </div>
            </div>
            
        </Layout>
    )
}

export const Head = () => <title>Filmes</title>

export default FilmesPage