import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeartToggle from './HeartToggle';


const SmallCard = (props) => {
  // const [ status, setStatus ] = useState()

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
  //     // play here
  //     favorites.push(props.movie.id)
  //   }

  //   const stringifiedIds = JSON.stringify(favorites)
  //   localStorage.setItem('favoriteIds', stringifiedIds)
  // }

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
      const localStorageIds = localStorage.getItem("favoriteIds")

      favorites = JSON.parse(localStorageIds)
      favorites.splice(favorites.indexOf(props.movie.id), 1)

      const stringifiedIds = JSON.stringify(favorites)
      localStorage.setItem('favoriteIds', stringifiedIds)
      if(props.fetchFavs){
        props.fetchFavs(favorites)
      }
    }
  }

  return(
    <>
      <div className='col-10 col-sm-5 col-md-4 col-lg-3 p-2'>
        <div className="card d-flex h-100">
          <img className="img-fluid align-self-center pt-2"
          src={props.movie.poster_path ?(`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`):('https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png')}
          alt={`background ${props.movie.title}`}/>
          <div className="card-body mb-0 pb-0">
            <h5 className="card-title text-capitalize mb-0 pb-2">{props.movie.title}</h5>
          </div>
          <div className="d-flex mb-3 mx-2 flex-row align-items-center">
            <Link to={`/viewfilm/${props.movie.id}`} className='linkSmallCard btn-primary-smallCard border-0 rounded py-2 px-4 mr-1'>
              Description
            </Link>
            {/* <button className="btn-primary btn-fav-smallCard bg-danger border-0 rounded p-2 col-md-4 col-3" onClick={handleClickAddToFavorites}>
              Fav
            </button> */}
            <HeartToggle handleChange={handleChange} checked={props.movie.id}/>
            {/*  jouer avec le local sorage */}
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallCard