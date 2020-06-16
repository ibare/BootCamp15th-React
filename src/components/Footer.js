import React from 'react';
import { connect } from 'react-redux';
import { INCERMENT_SECONDS } from '../actions';

class Footer extends React.Component {
  tick() {
    this.props.incrementSeconds();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { text, seconds } = this.props;

    return (
      <a href="https://reactjs.org" style={{ color: 'white' }}>
        { text } { seconds }
      </a>
    );
  }
}

function mapStateToProps(state) {
  return {
    seconds: state.seconds
  };
}

const mapDispatchToProps = (dispatch) => ({
  incrementSeconds: () => dispatch({
    type: INCERMENT_SECONDS
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
