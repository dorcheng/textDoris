import React, {Component} from 'react';

class AskBox extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      question: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleSubmit(evt) {
    alert('This is the state:', this.state);
    evt.preventDefault();
  }

  render() {
    return (
      <div className = "ask-box">
        <form onSubmit={this.handleSubmit}>
          <div>Ask me anything :)</div>
          <label>Name:</label>
          <input name="name" type="text" placeholder="SweetToothAnonymous" />
          <textarea name="question" type="text" placeholder="What is your favorite dessert spot in NYC?" />
        </form>
      </div>
    );
  }
}

export default AskBox;
