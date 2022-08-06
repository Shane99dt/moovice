import { useEffect, useState } from "react"
import LoadingAnimationFilmBar from "../components/LoadingAnimationFilmBar"
import PageTitle from "../components/PageTitle"
import SmallCard from "../components/SmallCard"

const Home = () => {

  const [latest, setLatest] = useState(null)
  const [topRated, setTopRated] = useState(null)
  const [nowPlaying, setNowPlaying] = useState(null)
  const [upcoming, setUpcoming] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // Latest
    const requestLatest = await fetch(`https://api.themoviedb.org/3/movie/latest?api_key=8bf0372ddd1eb53a0909b7e274ee5973&language=en-US`)

    const responseLatest = await requestLatest.json()
    setLatest(responseLatest.results)

    // top rated
    const requestTopRated = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8bf0372ddd1eb53a0909b7e274ee5973&page=1`)

    const responseTopRated = await requestTopRated.json()
    setTopRated(responseTopRated.results)

    // Now playing
    const requestNowPlaying = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=8bf0372ddd1eb53a0909b7e274ee5973&page=1`)

    const responseNowPlaying = await requestNowPlaying.json()
    setNowPlaying(responseNowPlaying.results)

    // upcoming
    const requestUpcoming = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=8bf0372ddd1eb53a0909b7e274ee5973&page=1`)

    const responseUpcoming = await requestUpcoming.json()
    setUpcoming(responseUpcoming.results)


  }


  return(
    <>
      <PageTitle title={"home"}/>

        {/* Latest */}
      <section className="mt-2">
        <h3 className="home-title" >Latest</h3>
        <article className="movie-bar top-rated d-flex flex-row ">
        { !latest ?
          (
            <>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
            </>
          ) :(
          latest.map((movie) => {
            return(
              <SmallCard movie={movie} key={movie.id}/>
              )
            })
            )}
        </article>
      </section>

      {/* topRated */}
      <section className="mt-5">
        <h3 className="home-title" >Top Rated</h3>
        <article className="movie-bar top-rated d-flex flex-row ">
          { !topRated ?
          (<>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
            </>) :(
          topRated.map((movie) => {
            return(
              <SmallCard movie={movie} key={movie.id}/>
              )
            })
            )}
        </article>
      </section>

      {/* Now playing */}
      <section className="mt-5">
        <h3 className="home-title" >Now playing</h3>
        <article className="movie-bar top-rated d-flex flex-row ">
        { !nowPlaying ?
          (<>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
            </>) :(
          nowPlaying.map((movie) => {
            return(
              <SmallCard movie={movie} key={movie.id}/>
              )
            })
            )}
        </article>
      </section>

      {/* Upcoming */}
      <section className="mt-5">
        <h3 className="home-title" >Upcoming</h3>
        <article className="movie-bar top-rated d-flex flex-row">
        { !upcoming ?
          (<>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
              <LoadingAnimationFilmBar/>
            </>) :(
          upcoming.map((movie) => {
            return(
              <SmallCard movie={movie} key={movie.id}/>
              )
            })
            )}
        </article>
      </section>
    </>
  )
}

export default Home