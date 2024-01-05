import InitialPage from './components/InitialPage'
import MoviesPage from './components/MoviesPage'
import OriginPage from './components/OriginPage'
import SeparatorPage from './components/SeparatorPage'

export default function Home() {
  return (
   <> 
    <InitialPage/>
    <SeparatorPage/>
    <MoviesPage/>
    <SeparatorPage/>
    <OriginPage/>
   </>
   
  )
}
