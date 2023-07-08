import '../style/components/offers.sass'
import CardProduct from './card-product'

export default function Offers() {
    return (
        <section id='offers'>
            <h2>Ofertas exclusivas para você</h2>
            <div className='offers-cont'>
                < CardProduct />
                < CardProduct />
                < CardProduct />
            </div>
        </section>
    )
}
