import React, {Component} from 'react';


let styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}



class Loading extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: props.text
    }
  }

  componentDidMount() {
    let stopper = this.props.text + '...';
    this.interval = window.setInterval(function () {
      if (this.state.text === stopper) {
        this.setState(function() {
          return {
            text: this.props.text
          };
        });
      } else {
        this.setState(function (prevState) {
          return {
          text: prevState.text + '.'
          };
        });
      }
    }.bind(this), 300);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading'
}

export default Loading;
