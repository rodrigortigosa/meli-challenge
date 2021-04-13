import '../Navbar.css'; 

export const Navbar = () => {
  return (
    <header className="nav-header">
      <nav className="nav-search">
        <a className="nav-logo" href="/">
          <img id="logo1" src="logo-meli.png" alt="Logo de Mercado Libre" height="35px" width="145px"></img>
          <img id="logo2" src="meli-logo.png" alt="Logo de Mercadi Libre" height="40px" width="40px"></img>
        </a>
          <form className="form-search">
            <div className="div-form-search">
              <div className="input-group">
                <input id="input-search" type="text" className="form-control" placeholder="Buscar productos, marcas y mas..." maxLength="120" autoFocus></input>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" style={{backgroundColor:'white', border: '1px solid #ced4da'}}>
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