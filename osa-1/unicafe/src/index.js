import React from 'react';
import ReactDOM from 'react-dom';


const Button = (props) => {
    return(
       <button onClick={props.func}>{props.name}</button> 
    )
}

const Statistics = (props) => {

    if(props.reviews === false){
        return(
            <h4>Ei arvioita annettu</h4>
        )
    }else{
        return(

            
            <div>
                <Statistic title = "hyvä" value = {props.good}/>
                <Statistic title = "neutraali" value = {props.neutral}/>
                <Statistic title = "huono" value = {props.negative}/>
                <Statistic title = "keskiarvo" value = {props.average}/>
                <Statistic title = "positiivisia" value = {props.good/props.total}/>
            </div>
            
        )
    
    }
}

const Statistic = (props) => {
    return(
        <p>{props.title} {props.value}</p>
    )
}
class Voting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            negative: 0,
            total: 0,
            totalValue:0,
            average: 0,
            reviews: false

        }
    }

    countAverage(){
        const average = this.state.totalValue/this.state.total;
        this.setState({average: average, reviews: true})
    }

    voteGood(){
        this.setState({ good: this.state.good + 1, totalValue: this.state.totalValue +1, total: this.state.total +1 })
        this.countAverage();    
    }

    voteNeutral(){
        this.setState({ neutral: this.state.neutral + 1, total: this.state.total +1  })
        this.countAverage();      
    }

    voteNegative(){
        this.setState({ negative: this.state.negative + 1,  totalValue: this.state.totalValue -1, total: this.state.total +1  })    
        this.countAverage();   
    }



render() {
    return(
        <div>
            <Button func={this.voteGood.bind(this)} name="Good"/>
            <Button func={this.voteNeutral.bind(this)} name="Neutral"/>
            <Button func={this.voteNegative.bind(this)} name="Negative"/>
            <Statistics good = {this.state.good} neutral = {this.state.neutral} negative={this.state.negative} average ={this.state.average} total={this.state.total} reviews={this.state.reviews}/>
        </div>
        )
    }
}
 


ReactDOM.render(<Voting />, document.getElementById('root'));

