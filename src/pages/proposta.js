import * as React from "react"
import { useForm } from "react-hook-form";
import Layout from "../components/layout"

const PropostaPage = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }
  
    const onSubmit = dados => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "form_hook", ...dados })
      }).then(() => {
        alert("Em breve daremos um retorno do seu contato. Obrigado!");
        reset();
      }).catch(error => alert(error));
    };
  
    return (
        <Layout>
            <h2>Entre em Contato:</h2>
            <div className="container">
            <form name="form_hook" method="post" onSubmit={handleSubmit(onSubmit)}
                data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="form_hook" />
                <label>
                Nome
                <input type="text" name="nome" {...register("nome", { required: true, maxLength: 20 })} />
                {errors.nome && errors.nome.type === "required" && (
                    <span className="erro">&nbsp;Nome é obrigatório.</span>
                )}
                {errors.nome && errors.nome.type === "maxLength" && (
                    <span className="erro">&nbsp;Nome pode ter 20 caracteres no máximo.</span>
                )}
                </label>
                <label>
                Email
                <input type="email" name="email" {...register("email", {
                    required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} />
                {errors.email && errors.email.type === "required" && (
                    <span className="erro">&nbsp;Email é obrigatório.</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                    <span className="erro">&nbsp;Email inválido.</span>
                )}
                </label>
                <label>
                Título do Filme
                <input type="text" name="titulo" {...register("titulo", { required: true, maxLength: 100 })} />
                {errors.titulo && errors.titulo.type === "maxLength" && (
                    <span className="erro">&nbsp;Título pode ter 100 caracteres no máximo.</span>
                )}
                </label>
                <label>
                Breve Sinopse
                <textarea name="sinopse" rows="5" {...register("sinopse")} />
                </label>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpar" />
            </form>
            </div>
        </Layout>
    )
}

export default PropostaPage

export const Head = () => <title>Enviar Proposta</title>