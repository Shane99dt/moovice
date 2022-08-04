
const Card = (props) => {

  const handleClickAddToFavorites = () =>{

    let favorites = []

    if (localStorage.favoriteIds){
      const localStorageIds= localStorage.getItem("favoriteIds")
      favorites = JSON.parse(localStorageIds)
    }

    const checkId = favorites.find((id)=>{
      return (id === props.movie.id)
    })

    if(!checkId){
      favorites.push(props.movie.id)
    }

    const stringifiedIds = JSON.stringify(favorites)
    localStorage.setItem('favoriteIds', stringifiedIds)
  }

  // handle remove favorites
  const handleClickRemoveFavorites = () => {
    let favorites = []

    const localStorageIds= localStorage.getItem("favoriteIds")
    favorites = JSON.parse(localStorageIds)

    favorites.splice(favorites.indexOf(props.movie.id), 1)

    const stringifiedIds = JSON.stringify(favorites)
    localStorage.setItem('favoriteIds', stringifiedIds)
    props.fetchFavs(favorites)
  }


  return(
    <>
      <div className="card d-flex col-12 col-sm-5 col-md-4 col-lg-3 m-1">
        <img className="img-fluid align-self-center pt-2" src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt={`background ${props.movie.title}`}/>
        <div className="card-body">
          <h2 className="card-title text-capitalize">{props.movie.title}</h2>
          <p className="card-text font-weight-bold">Released: {props.movie.release_date}</p>
          <p className="card-text">{props.movie.overview}</p>
        </div>
        <button className="btn btn-primary mb-3 card-button"
          onClick={()=> {props.btnHandle === "Add to favorites" ? (handleClickAddToFavorites()) : (handleClickRemoveFavorites())}}
          >{props.btnHandle}</button>
      </div>
    </>
  )
}

export default Card