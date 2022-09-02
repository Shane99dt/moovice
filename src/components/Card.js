import { useState } from "react"
import { Link } from "react-router-dom"
import HeartToggle from "./HeartToggle"

const Card = (props) => {
  const [ status, setStatus ] = useState(false)


  const handleChange = e => {
    if(e.target.checked){
      setStatus(true)
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
    }else{
      setStatus(false)
      let favorites = []
      const localStorageIds= localStorage.getItem("favoriteIds")

      favorites = JSON.parse(localStorageIds)
      favorites.splice(favorites.indexOf(props.movie.id), 1)

      const stringifiedIds = JSON.stringify(favorites)
      localStorage.setItem('favoriteIds', stringifiedIds)
      if(props.fetchFavs){
        props.fetchFavs(favorites)
      }
    }
  }

  // const handleClickAddToFavorites = () =>{

  //   let favorites = []

  //   if (localStorage.favoriteIds){
  //     const localStorageIds= localStorage.getItem("favoriteIds")
  //     favorites = JSON.parse(localStorageIds)
  //   }

  //   const checkId = favorites.find((id)=>{
  //     return (id === props.movie.id)
  //   })

  //   if(!checkId){
  //     favorites.push(props.movie.id)
  //   }

  //   const stringifiedIds = JSON.stringify(favorites)
  //   localStorage.setItem('favoriteIds', stringifiedIds)
  // }

  // // handle remove favorites
  // const handleClickRemoveFavorites = () => {
  //   let favorites = []

  //   const localStorageIds= localStorage.getItem("favoriteIds")
  //   favorites = JSON.parse(localStorageIds)

  //   favorites.splice(favorites.indexOf(props.movie.id), 1)

  //   const stringifiedIds = JSON.stringify(favorites)
  //   localStorage.setItem('favoriteIds', stringifiedIds)
  //   props.fetchFavs(favorites)
  // }



  return(
    <>
      <div className="p-1 col-12 col-sm-5 col-md-4 col-xl-3">
        <div className="card d-flex h-100">
          <img className="img-fluid align-self-center pt-2"
          src={props.movie.poster_path ?(`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`):('https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png')}
          alt={`background ${props.movie.title}`}/>
          <div className="card-body">
            <h2 className="card-title text-capitalize">{props.movie.title}</h2>
            <p className="card-text font-weight-bold">Released: {props.movie.release_date}</p>
            <p className="card-text line-clamp-4">{props.movie.overview}</p>
          </div>
          <div className="d-flex flex-row mb-3 mx-2 align-items-center">
            <Link className='linkCard btn-primary-card border-0 rounded py-2 px-3 mr-1' to={`/viewfilm/${props.movie.id}`}>
              Description
            </Link>
            {/* <button className="btn btn-primary border-danger bg-danger btn-fav-card col-md-4 col-3"
              onClick={()=> {props.btnHandle === "Fav" ? (handleClickAddToFavorites()) : (handleClickRemoveFavorites())}}
              >{props.btnHandle}</button> */}
            <HeartToggle handleChange={handleChange} checked={props.movie.id} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Card