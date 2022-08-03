
const Card = (props) => {

  const handleClickAddToFavorites = (currentId) =>{

    let favorites = []

    if (localStorage.favoriteIds){
      const localStorageIds= localStorage.getItem("favoriteIds")
      favorites = JSON.parse(localStorageIds)
    }else{
      favorites=[]
    }

    const checkId = favorites.find((id)=>{
      return (id === currentId)
    })

    if(!checkId){
      favorites.push(currentId)
    }

    const stringifiedIds = JSON.stringify(favorites)
    localStorage.setItem('favoriteIds', stringifiedIds)
  }


  return(
    <>
      <div className="card d-flex col-8 col-sm-5 col-md-4 col-lg-3 m-1">
        <img className="img-fluid align-self-center pt-2" src={`https://image.tmdb.org/t/p/w300/${props.movie.backdrop_path}`} alt={`background ${props.movie.title}`}/>
        <div className="card-body">
          <h2 className="card-title text-capitalize">{props.movie.title}</h2>
          <p className="card-text font-weight-bold">{props.movie.release_date}</p>
          <p className="card-text">{props.movie.overview}</p>
          <button className="btn btn-primary" onClick={()=> handleClickAddToFavorites(props.movie.id)}>Add to favorites</button>
        </div>
      </div>
    </>
  )
}

export default Card