import React, { useState } from "react";
import Botao from "../Botao";
import SuspenseList from "../SuspenseList";
import Field from "../Field";
import './styles.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {
    const [id,setId] = useState(uuidv4())
    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [favorito] = useState(false)
    const [time,setTime] = useState('')
    const [nomeTime,setNomeTime] = useState('')
    const [corTime,setCorTime] = useState('')

const onSave = (event) =>{
    event.preventDefault();
    props.onColaborate({id,nome,cargo,imagem,time,favorito});
    setCargo('');setImagem('');setNome('');setTime('');setId(uuidv4())
}

const onRegister = (event) =>{
    event.preventDefault();
    props.cadastrarTime({nome:nomeTime,cor:corTime});
    setCorTime('');setNomeTime('')
}

    return (
        <section className="Formulario">
            <form onSubmit={onSave}>
                <h2>Novo Colaborador</h2>
                <Field valor={nome} Alterado={valor => setNome(valor)} obligation={true} label="Nome" placeholder="Digite seu nome" />
                <Field valor={cargo} Alterado={valor => setCargo(valor)} obligation={true} label="Cargo" placeholder="Digite seu cargo" />
                <Field valor={imagem} Alterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o Endereço da imagem"/>
                <SuspenseList  label="Time" items={props.times} valor={time}  Alterado={valor => setTime(valor)} />
                <Botao>
                  Criar Card
                </Botao>
            </form>
            <form onSubmit={onRegister}>
                <h2>Novo Time</h2>
                <Field valor={nomeTime} Alterado={valor => setNomeTime(valor)} obligation={true} label="Nome" placeholder="Digite o nome do Time" />
                <Field type='color' valor={corTime} Alterado={valor => setCorTime(valor)} obligation={true} label="Cor" placeholder="Insira a cor do time" />
                <Botao>
                  Criar Time
                </Botao>
            </form>
        </section>
    );


}
export default Formulario