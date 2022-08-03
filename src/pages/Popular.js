import Card from "../components/Card"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"

const Popular = () => {

  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const request = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8bf0372ddd1eb53a0909b7e274ee5973")
    const response = await request.json()
    setMovies(response)
  }


  if(!movies){
    return(
      <p>Loading</p>
    )
  }

  return(
    <>
      <NavBar/>
      <h1>Popular</h1>

      <section className="d-flex flex-row flex-wrap">
        {movies.results.map((movie) => {
          return(
            <Card
              movieImage = {movie.backdrop_path}
              movieTitle = {movie.title}
              movieYear = {movie.release_date}
              movieDescription ={movie.overview}
              movie = {movie}
            />
          )
        })}
      </section>
    </>
  )
}

export default Popular