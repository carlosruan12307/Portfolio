import React from 'react'
import { Link } from 'react-router-dom'

function Projetos() {
  return (
    <Link  className="card flex-wrap cardzinho  col-10 col-md-5 col-sm-5 col-lg-5 ms-4 mb-4 mt-5 me-4"  style={{textDecoration:"none", height: "380px" }}>
    <div className="card-header">
      <h1 className="card-title">algum titulo</h1>
      <h6 className="card-subtitle">conteudo</h6>
    </div>

    <div className="card-body"></div>

    <div className="card-footer  text-center">
      <a
        href="#"
        className="btn btn-primary"
      >
        Acessar
      </a>
    </div>
    </Link>
  )
}

export default Projetos