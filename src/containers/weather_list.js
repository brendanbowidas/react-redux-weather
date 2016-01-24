import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeWeather } from '../actions/index';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

 class WeatherList extends Component {
   constructor(props) {
     super(props);
     this._remove = this._remove.bind(this);
   }

   _renderWeather(cityData) {
     const name = cityData.city.name;
     const temps = cityData.list.map(weather => weather.main.temp);
     const humidity = cityData.list.map(weather => weather.main.humidity);
     const pressure = cityData.list.map(weather => weather.main.pressure);
     const  { lon, lat } = cityData.city.coord;

     return (
       <tr key={name}>
         <td><GoogleMap lon={lon} lat={lat} /></td>
         <td>
           <Chart key={temps} color="red" data={temps} />
         </td>
         <td>
           <Chart key={humidity} color="blue" data={humidity} />
         </td>
         <td>
           <Chart key={pressure} color="green" data={pressure} />
         </td>
       </tr>

     );
   }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this._renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeWeather: removeWeather}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
