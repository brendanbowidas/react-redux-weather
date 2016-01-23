import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

 class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  _onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }
  _onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);

    this.setState({term: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this._onFormSubmit(e)} className="input-group">
          <input type="text"
            className="form-control"
            value={this.state.term}
          onChange={(e) => this._onInputChange(e)}
          />

          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
            Submit
            </button>
          </span>

        </form>
        </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}
//null = don't need state
export default connect(null, mapDispatchToProps)(SearchBar);
