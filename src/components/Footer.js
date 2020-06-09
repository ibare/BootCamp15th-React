import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState({ 
      seconds: this.state.seconds + 1 
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { text } = this.props;

    return (
      <a href="https://reactjs.org">
        { text } { this.state.seconds }
      </a>
    );
  }
}
