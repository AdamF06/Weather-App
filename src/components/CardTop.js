import React, { Component } from 'react';
import Axios from 'axios';

class CardTop extends Component {
    constructor (){
        super()
        this.state={
            temp_c:"",
            humidity:"",
            wind_kph:""
        }
    }
    componentDidMount(){
        Axios.get('https://api.apixu.com/v1/forecast.json?forecast_days=6&key=1eb8b1de06614af3a3423418171609&q=Paris&days=6')
        .then((responce) => {
            const {data:{current:{temp_c,humidity,wind_kph}}} =responce
            this.setState({
                temp_c,
                humidity,
                wind_kph
            })
        })
    }

    render() {
        return (
            <>
                <div className="left">
                    <div>
                        <h1>{this.state.temp_c+"°"}</h1>
                        <h4>CLOUDLY</h4>
                    </div>
                    <ul>
                        <li>
                            <p> HUIDITY</p>
                            <p>{this.state.humidity+"%"}</p>
                        </li>
                        <li className="bar"></li>
                        <li>
                            <p> WIND</p>
                            <p>{this.state.wind_kph} KM/H</p>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <h2>FRANCE</h2>
                    <div></div>
                </div>
            </>

        );
    }
}

export default CardTop;
