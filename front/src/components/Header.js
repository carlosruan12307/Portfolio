import $ from "jquery";
import { Link } from "react-router-dom";
function Header() {
  const a = (e) => {
    $("a").removeClass("click");
    $("#" + e.target.id).addClass("click");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <button
          className="navbar-toggler border-5 border-dark bg-white m-auto "
          data-bs-toggle="collapse"
          data-bs-target="#navt"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

<ul id="navt" className="navbar-nav navbar-collapse collapse ">
          <li className="nav-item p-2">
            <Link id="xd" onClick={a} className="nav-link p-2  btn " to="/">
              Home
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link id="xd1" onClick={a} className="nav-link p-2 btn  " to="/SobreMim">
              Sobre Mim
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link id="xd2" onClick={a} className="nav-link p-2  btn " to="/Projetos">
              Projetos
            </Link>
          </li>
        </ul>

       
      </nav>
    </div>
  );
}

export default Header;
