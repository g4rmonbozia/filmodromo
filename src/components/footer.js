import React from "react"

export default function Footer(props) {
    return (
        <p className='footer'>
            © {props.copyrightYear} Filmódromo. Todos os direitos reservados.
        </p>
    )
}
