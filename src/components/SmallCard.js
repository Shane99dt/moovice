import heartImg from '../images/love.png'
import HeartToggle from './HeartToggle'

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
      <div className="card d-flex col-10 col-sm-5 col-md-4 col-lg-3 m-1 h">
        <img className="img-fluid align-self-center pt-2" src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt={`background ${props.movie.title}`}/>
        <div className="card-body">
          <p className="card-title text-capitalize font-weight-bold">{props.movie.title}</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-primary card-button"
            >Description</button>
          {/* <button className="heartBtn border-0 bg-transparent"></button> */}
          <HeartToggle/>
        </div>
      </div>
    </>
  )
}

export default SmallCard