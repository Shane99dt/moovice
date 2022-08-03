import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Card from "../components/Card"

const Favorites = () => {

  const [favoriteMovies, setFavoriteMovies] = useState([])

  useEffect(() => {
    let favoriteIdsArray

    if(localStorage.favoriteIds){
      const localStorageIds= localStorage.getItem("favoriteIds")
      favoriteIdsArray = JSON.parse(localStorageIds)

      const favorite = [...favoriteMovies]

      favoriteIdsArray.map((id) => {
        fetchFavs(id, favorite)
      })
    }
  }, [])

  const fetchFavs = async (id, favorite) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8bf0372ddd1eb53a0909b7e274ee5973`)
    const response = await request.json()

    favorite.push(response)
    setFavoriteMovies(favorite)
  }

  if(!favoriteMovies){
    return(
      <p>Loading</p>
    )
  }


  return(
    <>
      <NavBar/>
      <h1>Favorites</h1>
      <section className="d-flex flex-row flex-wrap">
        {favoriteMovies.map((movie) => {
          return(
            <Card
              movieTitle = {movie.title}
              movieImage = {movie.backdrop_path}
              movieDescription = {movie.overview}
              movieYear = {movie.release_date}
              movie = {movie}
            />
          )
        })}
      </section>
    </>
  )
}

export default Favorites