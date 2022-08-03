import { Link } from "react-router-dom"

const NavBar = () => {
  return(
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={`/`} className="btn font-weight-bold pr-4 navbar-brand">Home</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <Link to={`/weekly`} className="btn font-weight-bold pr-4 nav-link">Weekly</Link>
            </li>
            <li class="nav-item">
            <Link to={`/popular`} className="btn font-weight-bold pr-4 nav-link">Popular</Link>
            </li>
            <li class="nav-item">
              <Link to={`/favorites`} className="btn font-weight-bold pr-4 nav-link">Favorites</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar