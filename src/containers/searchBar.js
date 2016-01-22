import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  _onInputChange(e) {
    console.log(e.target.value);
    this.setState({
      term: e.target.value
    })
  }
  _onFormSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
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
    );
  }
}
