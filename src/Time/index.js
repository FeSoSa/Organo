import Colaborador from '../components/Colaborador'
import './styles.css'

const Time = (props) => {
    return(
        (props.colaborate.length > 0) &&
        <section className='time' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaborates'>
             {props.colaborate.map(colaborate => <Colaborador key={colaborate.nome} corPrimaria={props.corPrimaria} nome={colaborate.nome} cargo={colaborate.cargo} imagem={colaborate.imagem}/>)}
            </div>
          


        </section>
    )


}

export default Time