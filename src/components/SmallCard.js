import { Link } from 'react-router-dom';


const SmallCard = (props) => {

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


  return(
    <>
      <div className='col-10 col-sm-5 col-md-4 col-lg-3 p-2'>
        <div className="card d-flex h-100">
          <img className="img-fluid align-self-center pt-2" src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt={`background ${props.movie.title}`}/>
          <div className="card-body mb-0 pb-0">
            <h5 className="card-title text-capitalize mb-0 pb-2">{props.movie.title}</h5>
          </div>
          <div className="d-flex mb-3 mx-2">
            <button className="btn-primary btn-primary-smallCard border-0 rounded p-2 mr-1"
            >
            <Link className='linkSmallCard' to={`/viewfilm/${props.movie.id}`} >
              Description
            </Link>
              </button>
            <button className="btn-primary btn-fav-smallCard bg-danger border-0 rounded p-2 col-md-4 col-3" onClick={handleClickAddToFavorites}>
              Fav
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallCard