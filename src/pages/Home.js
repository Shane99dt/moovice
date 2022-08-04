import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import PageTitle from "../components/PageTitle"

const Home = () => {
  return(
    <>
      <NavBar/>
      <PageTitle title={"home"}/>
    </>
  )
}

export default Home