import { Link } from "react-router-dom"

const NavBar = () => {
  return(
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <Link to={`/`} className="btn font-weight-bold pr-4 navbar-brand">Moovice</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to={`/`} className="btn font-weight-bold pr-4 nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link to={`/weekly`} className="btn font-weight-bold pr-4 nav-link">Weekly</Link>
            </li>
            <li className="nav-item">
            <Link to={`/popular`} className="btn font-weight-bold pr-4 nav-link">Popular</Link>
            </li>
            <li className="nav-item">
              <Link to={`/favorites`} className="btn font-weight-bold pr-4 nav-link">Favorites</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar