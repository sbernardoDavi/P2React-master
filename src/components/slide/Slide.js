import styles from './Slide.module.css'
import imagem_slide from '../../assets/imagem_slide.png'


function Slide(){
    return(
        <div className={styles.divslide}>
            <div className={styles.textoslide}>
                <h1>Nossa especialidade: experiência em compra</h1>
            </div>
            <div className={styles.imagemslide}>
            <img src={imagem_slide} alt="imagem" width="600px"></img>
            </div>
           
        </div>

    )

}

export default Slide