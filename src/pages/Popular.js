import Card from "../components/Card"
import { useEffect, useState } from "react"
import LoadingAnimation from "../components/LoadingAnimation"
import PageTitle from "../components/PageTitle"

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
      <LoadingAnimation/>
    )
  }

  return(
    <>
      <PageTitle title={"popular"}/>
      <section className="d-flex flex-row flex-wrap justify-content-center">
        {movies.results.map((movie) => {
          return(
            <Card
              key ={movie.title}
              movie = {movie}
              btnHandle = {"Fav"}
            />
          )
        })}
      </section>
    </>
  )
}

export default Popular