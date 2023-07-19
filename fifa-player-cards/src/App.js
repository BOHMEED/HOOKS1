
// src/App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'I am a software engineer.',
      imgSrc: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      profession: 'Software Engineer',
    },
    shows: false,
    mountedTime: 0,
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Profile Card App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <img src={imgSrc} alt={fullName} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <h2>{fullName}</h2>
            <p>Profession: {profession}</p>
            <p>Bio: {bio}</p>
          </div>
        )}
        <p>Time since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
