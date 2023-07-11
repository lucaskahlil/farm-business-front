import Footer from '../components/footer'
import Header from '../components/header'
import LoginForm from '../components/login-form'

import '../style/pages/home.sass'

export default function Home() {
  return (
    <div id='home-container'>
        < Header />
        < LoginForm />
        < Footer />
    </div>
  )
}
