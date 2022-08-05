import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LoadingAnimation from "../components/LoadingAnimation"
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
    const requestLatest = await fetch(`https://api.themoviedb.org/3/movie/latest?api_key=8bf0372ddd1eb53a0909b7e274ee5973`)

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

  // if(!topRated){
  //   return(
  //     <LoadingAnimation/>
  //   )
  // }

  // if(!latest){
  //   return(
  //     <LoadingAnimation/>
  //   )
  // }
  // if(!nowPlaying){
  //   return(
  //     <LoadingAnimation/>
  //   )
  // }
  // if(!upcoming){
  //   return(
  //     <LoadingAnimation/>
  //   )
  // }





  return(
    <>
      <PageTitle title={"home"}/>

        {/* Latest */}
        <section className="">
        <h3>Latest</h3>
        <article className="movie-bar top-rated d-flex flex-row align-items-center">
        { !latest ?
          (
            <>
              {/* check */}
              <div className="card d-flex col-10 col-sm-5 col-md-4 col-lg-3 m-1 h">
                <img className="img-fluid align-self-center pt-2" src="https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png" alt="loading"/>
                <div className="card-body">
                  <p className="card-title text-capitalize font-weight-bold">Loading...</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <button className="btn btn-primary card-button"
                    >Description</button>
                  {/* <button className="heartBtn border-0 bg-transparent"></button> */}
                  {/* <HeartToggle/> */}
                </div>
              </div>
              <LoadingAnimationFilmBar/>
              {/* check */}
            </>
          ) :(
          latest.map((movie) => {
            return(
              <SmallCard movie={movie} key={movie.title}/>
              )
            })
            )}
        </article>
      </section>

      {/* topRated */}
      <section className="">
        <h3>topRated</h3>
        <article className="movie-bar top-rated d-flex flex-row align-items-center">
          { !topRated ?
          (<LoadingAnimation/>) :(
          topRated.map((movie) => {
            return(
              <SmallCard movie={movie} key={movie.title}/>
              )
            })
            )}
        </article>
      </section>

      {/* Now playing */}
      <section className="">
        <h3>Now playing</h3>
        <article className="movie-bar top-rated d-flex flex-row align-items-center">
        { !nowPlaying ?
          (<LoadingAnimation/>) :(
          nowPlaying.map((movie) => {
            return(
              <SmallCard movie={movie} key={movie.title}/>
              )
            })
            )}
        </article>
      </section>

      {/* Upcoming */}
      <section className="">
        <h3>Upcoming</h3>
        <article className="movie-bar top-rated d-flex flex-row align-items-center">
        { !upcoming ?
          (<LoadingAnimation/>) :(
          upcoming.map((movie) => {
            return(
              <SmallCard movie={movie} key={movie.title}/>
              )
            })
            )}
        </article>
      </section>
    </>
  )
}

export default Home