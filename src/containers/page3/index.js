import React from 'react';
import { Prompt } from 'react-router-dom';

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValue: false
    }
  }
  textareaOnChange(event) {
    const value = event.target.value;
    if (value === "") {
      this.setState({ hasValue: false });
    } else {
      this.setState({ hasValue: true });
    }
  }
  render() {
    return (
      <div className="page3">
        <Prompt when={this.state.hasValue} message="Are you sure?" />
        <h1>Page 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officia veritatis natus molestias eaque aliquid unde ducimus quam necessitatibus. Tenetur qui accusamus ipsam repudiandae mollitia praesentium rem deserunt accusantium! Quasi dicta, delectus dolores reiciendis deleniti natus repudiandae voluptatem minima dolore.</p>
        <h4>Has Value: {this.state.hasValue ? 'Yes' : 'No'}</h4>
        <textarea cols="30" rows="10" onChange={this.textareaOnChange.bind(this)}>

        </textarea>
      </div>
    );
  }
}

export default Page3;
