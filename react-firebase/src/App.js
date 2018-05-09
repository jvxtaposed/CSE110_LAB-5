import React, { Component } from 'react';
import logo from './logo.svg';
import TeamMembers from './components/TeamMembers.js';
import DisplayData from './components/DisplayData.js'
import firebase from 'firebase'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        var config = {
            apiKey: "AIzaSyBDhKqn0mjqKN7AihCNuQP0KALZ_7p_Z4w",
            authDomain: "cse110firebase-c7d20.firebaseapp.com",
            databaseURL: "https://cse110firebase-c7d20.firebaseio.com",
            projectId: "cse110firebase-c7d20",
            storageBucket: "cse110firebase-c7d20.appspot.com",
            messagingSenderId: "645986086790"
        };
        firebase.initializeApp(config);
    }

  render() {
    return (
        <div>
            <TeamMembers
                db={firebase}/>
            <DisplayData
                db={firebase}/>
        </div>
    );
  }
}

export default App;
