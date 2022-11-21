import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      Ops, nenhuma página com esse endereço de link :/
      <Link to="/"> Clique aqui </Link>
      para retornar a pagina inical
    </div>
  );
}
