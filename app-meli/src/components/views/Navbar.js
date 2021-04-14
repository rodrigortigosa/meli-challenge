import '../../Navbar.css';
import { HOME, RESULTADOS } from '../../config/router/paths';
import { useHistory } from 'react-router-dom';

export const Navbar = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`${RESULTADOS}${event.target["query"].value}`);
  }

  return (
    <header className="nav-header">
      <nav className="nav-search">
        <a className="nav-logo" href={HOME}>
          <img id="logo1" src="logo-meli.png" alt="Logo de Mercado Libre" height="35px" width="145px"></img>
          <img id="logo2" src="meli-logo.png" alt="Logo de Mercadi Libre" height="40px" width="40px"></img>
        </a>
          <form className="form-search" onSubmit={handleSubmit}>
            <div className="div-form-search">
              <div className="input-group">
                <input name="query" id="input-search" type="text" className="form-control" placeholder="Buscar productos, marcas y mas..." maxLength="120" autoFocus></input>
                <div className="input-group-append">
                  <button className="btn" type="submit" style={{backgroundColor:'white', border: '1px solid #ced4da'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </form>
      </nav>
    </header>
  );
}