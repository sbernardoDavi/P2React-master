import styles from './Footer.module.css'
import logoFooter from '../../assets/logoFooter.png'
import entre_em_contato from '../../assets/entre_em_contato.png'
import fale_conosco from '../../assets/fale_conosco.png'


function Footer(){
    return(
        <footer className={styles.footer}>
             <div className={styles.localizacao}><h1>Localização</h1> 
             <div className={styles.traco}></div></div>
                <div className={styles.list}>
                    <tr></tr>
                    <tr></tr>
                    <div>
                        <h3>São Paulo</h3>
                        <p>
                            Rua do Rócio, 423/1801<br></br>
                            Vila Olímpia - SP <br></br>
                            04552-00<br></br>
                            +55 11 3333 3333
                        </p>
                    </div>
                    <div>
                        <h3>Rio de Janeiro</h3>
                        <p>
                            Vol. da Pátria, 301/702<br></br>
                            Botafogo - RJ<br></br>
                            22270-000<br></br>
                            +55 21 3333 3333
                        </p>
                    </div>
                    <div class={styles.contato}>
                        <img src={entre_em_contato} alt=""></img>
                        <img src={fale_conosco} alt=""></img>
                    </div>
                    <div className={styles.logodofooter}>
                    <img src={logoFooter} alt="" width="100px" ></img>
                    </div>
                </div>


                
        </footer>

    )
}

export default Footer