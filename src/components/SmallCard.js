const SmallCard = (props) => {

  const handleClickAddToFavorites = (currentId) =>{

    let favorites = []

    if (localStorage.favoriteIds){
      const localStorageIds= localStorage.getItem("favoriteIds")
      favorites = JSON.parse(localStorageIds)
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
      <div className="card d-flex col-10 col-sm-5 col-md-4 col-lg-3 m-1">
        <img className="img-fluid align-self-center pt-2" src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt={`background ${props.movie.title}`}/>
        <div className="card-body p-0 pt-2">
          <h5 className="card-title text-capitalize">{props.movie.title}</h5>
        </div>
        <div className="mb-3 d-flex justify-content-between">
          <button className="btn btn-primary card-button">More details</button>
          <button className="btn btn-primary">Fav</button>
        </div>
      </div>
    </>
  )
}

export default SmallCard