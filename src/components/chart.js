import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default class Chart extends Component {
  _setData(data, colors) {

      var colorIndex = 0;
      return (
        <td key={data}>
          <Sparklines height={120} width={180} data={data}>
            <SparklinesLine color="red"/>
          </Sparklines>
        </td>
      );

  }
  render() {
    return (
      <tr key={this.props.key}>
        <td>{this.props.name}</td>
          {this.props.data.map(this._setData)}
      </tr>
    );
  }
}
