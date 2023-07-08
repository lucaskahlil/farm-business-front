import Carousel from '../components/carousel'
import Categorys from '../components/categorys'
import Header from '../components/header'
import '../style/pages/home.sass'

export default function Home() {
  return (
    <div id='home-container'>
        < Header />
        < Carousel />
        < Categorys />
    </div>
  )
}
