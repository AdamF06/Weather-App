import React, { Component } from 'react';
import axios from 'axios'
import FutureWeatherItem from './FutureWeatherItem'
import {WEATHER_API} from '../environment'
import {
    Sun,
    Rain,
    Cloud,
    Storm
} from './Icon';

const Weekday = (day) => {
    const weekList = ["SON", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    return weekList[day]
}

class FutureWeather extends Component {
    constructor() {
        super()
        this.state = {
            days: []
        }
    }

    componentDidMount() {
        axios.get(WEATHER_API)
            .then((responce) => {
                const { data: { forecast: { forecastday } } } = responce
                //console.log(forecastday)
                // console.log(Weekday(new Date(date).getDay()));
                // console.log(avgtemp_c);
                this.setState({
                    days: [
                        {
                            weekday: Weekday(new Date(forecastday[1].date).getDay()),
                            icon: Rain,
                            temp: forecastday[1].day.avgtemp_c+"°",
                            weather: 'Raining'
                        },
                        {
                            weekday: Weekday(new Date(forecastday[2].date).getDay()),
                            icon: Sun,
                            temp: forecastday[2].day.avgtemp_c+"°",
                            weather: 'Sunney'
                        },
                        {
                            weekday: Weekday(new Date(forecastday[3].date).getDay()),
                            icon: Storm,
                            temp: forecastday[3].day.avgtemp_c+"°",
                            weather: 'Storm'
                        },
                        {
                            weekday: Weekday(new Date(forecastday[4].date).getDay()),
                            icon: Cloud,
                            temp: forecastday[4].day.avgtemp_c+"°",
                            weather: 'Cloudly'
                        },
                        {
                            weekday: Weekday(new Date(forecastday[5].date).getDay()),
                            icon: Sun,
                            temp: forecastday[5].day.avgtemp_c+"°",
                            weather: 'Sunny'
                        }
                    ]
                })
                console.log(this.state.days)
            })
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.days.map(
                        (item, index) =>
                            <li key={index}><FutureWeatherItem {...item} /></li>
                    )
                    }
                </ul>
            </>
        );
    }
}

export default FutureWeather;
