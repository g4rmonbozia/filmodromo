import * as React from "react"
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
            <p>Filmes</p>
            {
                data.allMdx.nodes.map((node) =>(
                    <article key={node.id}>
                        <Link to={node.frontmatter.slug}>
                            <h2>{node.frontmatter.title}</h2>
                        </Link>                        
                        <p>{node.frontmatter.date}</p>
                        <img alt={node.frontmatter.title} src={node.frontmatter.poster} />
                    </article>
                ))
            }
        </Layout>
    )
}

export const Head = () => <title>Filmes</title>

export default FilmesPage