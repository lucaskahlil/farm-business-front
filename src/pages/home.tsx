import Carousel from '../components/carousel'
import Categorys from '../components/categorys'
import Footer from '../components/footer'
import Header from '../components/header'
import Offers from '../components/offers'
import '../style/pages/home.sass'

export default function Home() {
  return (
    <div id='home-container'>
        < Header />
        < Carousel />
        < Categorys />
        < Offers />
        < Footer />
    </div>
  )
}
