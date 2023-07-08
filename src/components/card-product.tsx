import '../style/components/card-product.sass'

export default function CardProduct() {
    return (
        <div id='card-product'>
            <img src="https://st2.depositphotos.com/2632165/11804/i/600/depositphotos_118049482-stock-photo-young-plant-in-the-morning.jpg" alt="imagem do produto" />
            <div className='titulo-cont'>
                <h3>Nome do Produto</h3>
                <h3>CC</h3>
            </div>
            <div className='avl-cont'>
                <p className='stars'>XXXXX</p>
                <p className='qtd-avl'>5 Pessoas avaliaram esse produto</p>
            </div>
            <div className='price-cont'>
                <div className='price-av'>
                    <p className='price-product'>00,00</p>
                    <p className='price-cond'>à vista</p>
                </div>
                <p className='price-ins'>3x de 00,00 sem juros</p>
            </div>
            <button className='btn-comprar'>Comprar</button>
            <button className='btn-adicionar'>Adicionar a sacola</button>
        </div>
    )
}
