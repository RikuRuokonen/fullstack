import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) =>{
    return(
    <div>
    <Otsikko kurssi={props.kurssi.nimi} />
    <Sisalto osat={props.kurssi.osat} />
    <Yhteensa osat={props.kurssi.osat}/>
    </div>
    )

}


const Otsikko = (props) =>{
    return(
    <p>{props.kurssi}</p>
    )
}

const Sisalto = (props) =>{
    return(
    <div>
        <ul>
        {props.osat.map(osa => <Osa osa={osa} />)}
      </ul>
    </div>
    )
}

const Osa = (props) => {
    return(
        <div>
            <p>{props.osa.nimi}</p>
            <p>{props.osa.tehtavia}</p>
        </div>
    )
}

const Yhteensa = (props) =>{
    let sum = props.osat.reduce(function(prevVal, osa) {
        return prevVal + osa.tehtavia;
    }, 0);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return(
    <p>Yhteensä {sum} tehtävää</p>
    )
    
}



export default Kurssi