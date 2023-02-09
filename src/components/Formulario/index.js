import React, { useState } from "react";
import Botao from "../Botao";
import SuspenseList from "../SuspenseList";
import TextField from "../TextField";
import './styles.css'

const Formulario = (props) => {

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

const onSave = (event) =>{
    event.preventDefault();
    props.onColaborate({nome,cargo,imagem,time});
    setCargo('');setImagem('');setNome('');setTime('')

}

    return (
        <section className="Formulario">
            <form onSubmit={onSave}>
                <TextField valor={nome} Alterado={valor => setNome(valor)} obligation={true} label="Nome" placeholder="Digite seu nome" />
                <TextField valor={cargo} Alterado={valor => setCargo(valor)} obligation={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField valor={imagem} Alterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o Endereço da imagem"/>
                <SuspenseList  label="Time" items={props.times} valor={time}  Alterado={valor => setTime(valor)} />
                <Botao>
                  Criar Card
                </Botao>
            </form>
        </section>
    );


}
export default Formulario