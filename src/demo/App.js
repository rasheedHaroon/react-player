import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import ReactPlayer from '../ReactPlayer'
import Duration from './Duration'

class App extends Component {
  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }

  ref = player => {
    this.player = player
  }

  render() {
    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
    const SEPARATOR = ' · '

    return (
      <div className='app'>
        <section className='section'>
          <h1>ReactPlayer Demo</h1>
          <div className='player-wrapper'>
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.handlePlay}
              onEnablePIP={this.handleEnablePIP}
              onDisablePIP={this.handleDisablePIP}
              onPause={this.handlePause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.handleEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.handleProgress}
              onDuration={this.handleDuration}



            />
          </div>

          <table>
            <tbody>
              <tr>
                <th>Files</th>
                <td>
                  {this.renderLoadButton('src/local/Armed.mp4', 'Armed')}
                  {this.renderLoadButton('src/local/Dining.mp4', 'Dining')}
                  {this.renderLoadButton('src/local/Hospital.mp4', 'Hospital')}
                  {this.renderLoadButton('src/local/Soccer.mp4', 'Soccer')}
                  {this.renderLoadButton('src/local/Teaching.mp4', 'Teaching')}
                  {this.renderLoadButton('src/local/Trekking.mp4', 'Trekking')}
                </td>
              </tr>
              <tr>
                <th>elapsed</th>
                <td><Duration seconds={duration * played} /></td>
              </tr>
            </tbody>
          </table>
        </section>


      </div>
    )
  }
}

export default hot(module)(App)
