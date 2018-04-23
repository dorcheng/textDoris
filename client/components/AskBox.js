import React, { Component } from 'react';
import axios from 'axios';

class AskBox extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    axios.post('/api/questions', this.state)
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className = "ask-box">
        <form onSubmit={this.handleSubmit}>
          <div>Ask me anything :)</div>
          <label>Name:</label>
          <input name="author" type="text" placeholder="SweetToothAnonymous" onChange={this.handleChange} />
          <textarea name="body" type="text" placeholder="What is your favorite dessert spot in NYC?" onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AskBox;
