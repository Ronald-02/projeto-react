import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> CineGo
        </Link>
      </h2>
     <nav id= "link">
      <ul>
        <li>
          <Link to="Contato /">Contato</Link>
        </li>
        <li>
          <Link to="Login /">Login</Link>
        </li>
        <li>
          <Link to="Produtos /">Produtos</Link>
        </li>
        <li>
          <Link to="Cinema /">Cinema</Link>
        </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;