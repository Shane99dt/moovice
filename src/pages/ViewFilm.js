import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingAnimation from "../components/LoadingAnimation"
import SmallCard from "../components/SmallCard"


const ViewFilm = () => {

  const params = useParams()
  const [movie, setMovie] = useState(null)
  const [similiar, setSimiliar] = useState(null)

  useEffect(() => {
    fetchMovie()
  }, [])

  const fetchMovie = async () => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8bf0372ddd1eb53a0909b7e274ee5973`)
    const response = await request.json()
    setMovie(response)

    const requestSimiliar = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=8bf0372ddd1eb53a0909b7e274ee5973&page=1`)
    const responseSimiliar = await requestSimiliar.json()
    setSimiliar(responseSimiliar.results)
  }

  // add to favs
  const handleClickAddToFavorites = () =>{

    let favorites = []

    if (localStorage.favoriteIds){
      const localStorageIds= localStorage.getItem("favoriteIds")
      favorites = JSON.parse(localStorageIds)
    }

    const checkId = favorites.find((id)=>{
      return (id === movie.id)
    })

    if(!checkId){
      favorites.push(movie.id)
    }

    const stringifiedIds = JSON.stringify(favorites)
    localStorage.setItem('favoriteIds', stringifiedIds)
  }

  // check null

  if(!movie){
    return(
      <LoadingAnimation/>
    )
  }


  return(
    <>
      <div className="film-background mt-md-5 mt-3">
        <section>
          <article className="d-flex flex-md-row flex-column px-md-0 px-2">
            <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            // src={movie.poster_path ?(`https://image.tmdb.org/t/p/w300/${movie.poster_path}`):('https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png')}
            alt={movie.title} className='col-12 col-sm-6 col-md-4 col-xl-4'/>
            <div className="mt-md-0 mt-4 ml-md-4">
              <div className="m-0">
                <h2 className="m-0">{movie.original_title}</h2>
                <p className="m-0">{movie.runtime} mins</p>
              </div>
              <small className="m-0">{movie.title}</small>

              <h5 className="mt-3 m-0">Released: {movie.release_date}</h5>
              <p>{movie.status}</p>

              <p>{movie.overview}</p>
              <p>Budget: ${movie.budget}</p>
              <p>Revenue: ${movie.revenue}</p>
              <button className="btn btn-success" onClick={handleClickAddToFavorites} >Add to favorites</button>
            </div>
          </article>
        </section>
        {similiar &&
          <section className="my-5">
            <h1 className="mb-3 home-title">Similiar movies</h1>
            <article className="movie-bar top-rated d-flex flex-row ">
              {similiar.map((movie) => {
                return(
                  <SmallCard movie={movie} key={movie.id}/>
                  )
                })}
            </article>
          </section>
        }
      </div>
    </>
  )
}

export default ViewFilm