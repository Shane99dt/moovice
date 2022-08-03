import { Link } from "react-router-dom"

const NavBar = () => {
  return(
    <>
      <section className="d-flex flex-row justify-content-end text-dark pt-3">
        <Link to={`/`} className="btn font-weight-bold pr-4">Home</Link>
        <Link to={`/weekly`} className="btn font-weight-bold pr-4">Weekly</Link>
        <Link to={`/popular`} className="btn font-weight-bold pr-4">Popular</Link>
        <Link to={`/favorites`} className="btn font-weight-bold pr-4">Favorites</Link>
      </section>
    </>
  )
}

export default NavBar