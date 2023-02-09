import React, { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';

import Time from './Time';


function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8F7'
    },
    {
      nome:'Data-Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    }
    ,    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]

  const[colaborate,setColaborate] = useState([])

const AddColaborate = (props) =>{
  console.log(props)
  setColaborate([...colaborate,props])
}

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} onColaborate={props => AddColaborate(props)}/>
      
      {times.map(time => <Time colaborate={colaborate.filter(props => props.time === time.nome)} key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
      <Rodape/>



    </div>
  );
}

export default App;
