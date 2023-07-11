import '../style/components/login-form.sass'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

export default function LoginForm() {
    return (
        <section>
            <form id='form-login'>
                <div className='title-login'>
                    <h2>Fazer Login</h2>
                    <p>Faça o seu login para obter produtos e promoções exclusivas para você</p>
                </div>
                <div className='input-container'>
                    <label>< AiOutlineMail /></label>
                    <input type="text" placeholder='Mail'/>
                </div>
                <div className='input-container'>
                    <label>< AiOutlineLock /></label>
                    <input type="text" placeholder='Senha'/>
                </div>
                <p>Esqueceu a senha? <a>Clique Aqui</a></p>
                <button className='btn-green'>Continuar</button>
            </form>
        </section>
    )
}
