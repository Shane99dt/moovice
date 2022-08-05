import HeartToggle from "./HeartToggle"

const LoadingAnimationFilmBar = () => {
  return(
    <>
      <div className="card d-flex col-10 col-sm-5 col-md-4 col-lg-3 m-1 h">
        <img className="img-fluid align-self-center pt-2" src="https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png" alt="loading"/>
        <section className="loader-sec-film">
          <span className="loader"><span className="loader-inner"></span></span>
        </section>
        <div className="card-body">
          <p className="card-title text-capitalize font-weight-bold">Loading...</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <button className="btn-primary border-0 rounded p-2"
            >Description</button>
          {/* <button className="heartBtn border-0 bg-transparent"></button> */}
          {/* <HeartToggle/> */}
        </div>
      </div>
    </>
  )
}

export default LoadingAnimationFilmBar