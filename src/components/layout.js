import React from "react"
import "./layout.css"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

export default function Layout({ children }) {

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `
    )

    return (
        <main className="layout">
            <div className="header">
                <h3>{data.site.siteMetadata.title}</h3>
                <nav className="topnav">
                    <Link to="/">Início</Link>
                    <Link to="/filmes">Filmes</Link>
                    <Link to="/proposta">Enviar Proposta</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <Footer copyrightYear="2023" />
        </main >
    )
}
