import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) =>{
    return(
    <p>{props.kurssi}</p>
    )
}

const Sisalto = (props) =>{
    return(
    <div>
        <Osa nimi={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
        <Osa nimi={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
        <Osa nimi={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} />
    </div>
    )
}

const Osa = (props) => {
    return(
        <div>
            <p>{props.nimi}</p>
            <p>{props.tehtavia}</p>
        </div>
    )
}

const Yhteensa = (props) =>{
    return(
    <p>Yhteensä {props.yhteensa} tehtävää</p>
    )
    
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }
  
    return (
      <div>
        <Otsikko kurssi={kurssi.nimi} />
        <Sisalto osat={kurssi.osat} />
        <Yhteensa yhteensa={kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia}/>

      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
