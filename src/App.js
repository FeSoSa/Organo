import React, { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';

import Time from './Time';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data-Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])

  const [colaborate, setColaborate] = useState([])

  const AddColaborate = (props) => {
    console.log(props)
    setColaborate([...colaborate, props])
  }

  function deleteColaborator(id) {
    setColaborate(colaborate.filter(props => props.id !== id))
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time;
    }));
  }

  function cadastrarTime(props){
    setTimes([...times,{...props,id:uuidv4()}])
  }

  function resolverFavorito(id){
    setColaborate(colaborate.map(props => {
      if(props.id === id) props.favorito = !props.favorito;
      return props
    }))
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
      cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        onColaborate={props => AddColaborate(props)}
      />

      {times.map((time, indice) =>
        <Time
          aoFavoritar = {resolverFavorito}
          id={time.id}
          mudarCor={mudarCorTime}
          colaborate={colaborate.filter(props => props.time === time.nome)}
          key={indice}
          nome={time.nome}
          cor={time.cor}
          aoDeletar={deleteColaborator} />
      )}

      <Rodape />



    </div>
  );
}

export default App;
