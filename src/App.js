import React from 'react'
import BirthdayMessage from './components/BirthdayMessage'
import BirthdayData from './data/BirthdayData'
import song from './song.mp3'

class App extends React.Component {
  componentWillMount() {
    document.body.style.background = BirthdayData.color
    document.querySelector('title').innerText = `Happy Birthday, ${BirthdayData.wishee}!`
    document.querySelector('.favicon').href = `//dummyimage.com/64x64/${BirthdayData.color.substring(1)}/${BirthdayData.color.substring(1)}`
    document.querySelector('.theme-color').content = BirthdayData.color
  }

  render() {

    return (

      <div>

        <BirthdayMessage birthdayData={BirthdayData} />
        <br />
        <audio id="audio" ref={this.myRef} src={song} controls autoPlay type="audio/mp3" />

      </div>

    )
  }
}

export default App