import React, { Component } from 'react';
import axios from 'axios';
import AskBox from './AskBox';

export default class Home extends Component {
  constructor(){
    super();
      this.state = {
        questions: []
      };
  }
  componentDidMount() {
    axios.get('/api/questions').then(res => {
      this.setState({ questions: res.data });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <div className="feed-panel">
          {this.state.questions.map(question => {
            return (
              <div key={question.id} className="feed-item">
                <span className="author">{question.author}</span>
                <span className="dateTime">{question.createdAt}</span>
                <p className = "question">{question.body}</p>
                <p className = "answer">{question.answer.answer}</p>
              </div>
            );
          })}
        </div>
        <AskBox />
      </div>
    );
  }
}
