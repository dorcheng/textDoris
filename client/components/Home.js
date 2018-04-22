import React, { Component } from 'react';

export default class Home extends Component {
  constructor(){
    super();
      this.state = {
        feed: [{id: 1, question: 'What is your name', answer: 'Doris'}, {id: 2, question: 'What is your fav fruit', answer: 'mango'}]
      };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.feed.map(item => {
            return (
              <li key={item.id}>
                <div>
                  <span>{item.question}</span>
                  <p>{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
