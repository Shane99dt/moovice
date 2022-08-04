import moment from "moment"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import LoadingAnimation from "../components/LoadingAnimation"
import PageTitle from "../components/PageTitle"

const Weekly = () => {

  const [movies, setMOvies] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const request = await fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment().subtract(7, 'd').format("YYYY-MM-DD")}&primary_release_date.lte=${moment().format("YYYY-MM-DD")}&api_key=8bf0372ddd1eb53a0909b7e274ee5973`)

    const response = await request.json()
    setMOvies(response.results)
  }

  if(movies){
    return(
      <LoadingAnimation/>
    )
  }

  return(
    <>
      <PageTitle title={"Weekly"}/>
      <section className="d-flex flex-row flex-wrap justify-content-center">
        {movies.map((movie) => {
          return(
            <Card movie={movie} key={movie.title} btnHandle={"Add to favorites"} />
          )
        })}
      </section>
    </>
  )
}

export default Weekly