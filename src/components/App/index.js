import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebase from 'firebase'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header/index.js'
import Main from '../Main/index.js'
import Profile from '../Profile/index.js'
import Login from '../Login/index.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }

    this.handleOnAuth = this.handleOnAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }

  handleOnAuth () {
    const provider = new firebase.auth.GithubAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(`${result.user.email} ha iniciado sesión`)
      //  const datos = result.user
      //  this.setState({ user: datos })
      })
      .catch(error => console.error(`Error: ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(() => {
        console.log('Te has desconectado correctamente')
      //  this.setState({user: null})
      })
      .catch(() => console.error('Un error ocurrio'))
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' render={() => {
              if (this.state.user) {
                return (
                  <Main
                    user={this.state.user}
                    onLogout={this.handleLogout}
                  />
                )
              } else {
                return (
                  <Login onAuth={this.handleOnAuth} />
                )
              }
            }} />

            <Route path='/profile' render={() => {
              return (
                <Profile
                  picture={this.state.user.photoURL}
                  username={this.state.user.email.split('@')[0]}
                  displayName={this.state.user.displayName}
                  location={this.state.user.location}
                  emailAddress={this.state.user.email}
                />
              )
            }} />

            <Route path='/user/:username' render={({ params }) => {
            // render <Profile /> pasando params.username
            }} />
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App
