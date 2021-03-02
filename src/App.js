import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import ChatScreen from "./components/ChatScreen";
import Chats from "./components/Chats";
import Profile from "./components/Profile";



class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chats" />
              <ChatScreen />
            </Route>
            <Route path="/chats">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/profile">
              <Header />
              <Profile />
            </Route>
            <Route path="/">
              <Header />
              {/* <Cards user={this.state} /> */}
            </Route>
          </Switch>
        </Router>
      
      </div>
    );
  }
}

export default App;
