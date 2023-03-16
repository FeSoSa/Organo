import Colaborador from '../components/Colaborador'
import './styles.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        (props.colaborate.length > 0) &&
        <section className='time' style={{ backgroundColor: hexToRgba(props.cor, "0.5") }}>
            <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.id)} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaborates'>
                {props.colaborate.map((colaborate, indice) => {
                    return (<Colaborador key={indice}
                        cor={props.cor}
                        nome={colaborate.nome}
                        cargo={colaborate.cargo}
                        imagem={colaborate.imagem}
                        favorito={colaborate.favorito}
                        id={colaborate.id} 
                        aoDeletar={props.aoDeletar}
                        aoFavoritar={props.aoFavoritar}
                    />)
                })}
            </div>
        </section>
    )


}

export default Time