import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Card from "../components/Card"
import LoadingAnimation from "../components/LoadingAnimation"
import PageTitle from "../components/PageTitle"

const Favorites = () => {

  const [favoriteMovies, setFavoriteMovies] = useState([])

  useEffect(() => {
    let favoriteIdsArray

    if(localStorage.favoriteIds){
      const localStorageIds= localStorage.getItem("favoriteIds")
      favoriteIdsArray = JSON.parse(localStorageIds)
      fetchFavs(favoriteIdsArray)
    }
  }, [])


  // Fetch a movie by id
  const fetchMovie = async (id) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8bf0372ddd1eb53a0909b7e274ee5973`)
    const response = await request.json()
    return response
  }

  // Get all movies fetched by id
  const fetchFavs = async (idsArray) => {
    const promises = idsArray.map((id) => {
      return fetchMovie(id)
    })

    const promiseAll = await Promise.all(promises)
    setFavoriteMovies(promiseAll)
  }

  // handleClick remove favs
  // const handleClickRemoveFavorites = (id) => {
  //   let favorites = []

  //   const localStorageIds= localStorage.getItem("favoriteIds")
  //   favorites = JSON.parse(localStorageIds)

  //   favorites.splice(favorites.indexOf(id), 1)

  //   const stringifiedIds = JSON.stringify(favorites)
  //   localStorage.setItem('favoriteIds', stringifiedIds)
  //   fetchFavs(favorites)
  // }

  if(!favoriteMovies){
    return(
      <LoadingAnimation/>
    )
  }

  return(
    <>
      <NavBar/>
      <PageTitle title={"favorites"} />
      <section className="d-flex flex-row flex-wrap justify-content-center">
        {favoriteMovies.map((movie) => {
          return(
            <Card
              movie = {movie}
              btnHandle = {"Remove from Favorites"}
              // removeFav = {handleClickRemoveFavorites(movie.id)}
            />
          )
        })}
      </section>
    </>
  )
}

export default Favorites