import Footer from './components/Footer'
import InitialPage from './components/InitialPage'
import MoviesPage from './components/MoviesPage'
import OriginPage from './components/OriginPage'
import Programer from './components/Programer'
import SeparatorPage from './components/SeparatorPage'

export default function Home() {
  return (
   <> 
    <InitialPage/>
    <SeparatorPage/>
    <MoviesPage/>
    <SeparatorPage/>
    <OriginPage/>
    <Programer/>
    <Footer/>
   </>
   
  )
}
