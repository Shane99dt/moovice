import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card"
import LoadingAnimation from "../components/LoadingAnimation"
import PageTitle from "../components/PageTitle"
import SmallCard from "../components/SmallCard"

const Home = () => {

  const [topRated, setTopRated] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8bf0372ddd1eb53a0909b7e274ee5973&page=1`)

    const response = await request.json()
    setTopRated(response.results)
  }

  if(!topRated){
    return(
      <LoadingAnimation/>
    )
  }





  return(
    <>
      <PageTitle title={"home"}/>
      <section className="movie-bar top-rated d-flex flex-row align-items-center">
        {topRated.map((movie) => {
          return(
            <SmallCard movie={movie} key={movie.title}/>
          )
        })}
      </section>
    </>
  )
}

export default Home