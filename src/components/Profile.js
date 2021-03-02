import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class Profile extends Component {
    constructor() {
        super();
        const params = this.getHashParams();
        console.log(params);
        const token = params.access_token;
        if (token) {
          spotifyApi.setAccessToken(token);
        }
        this.state = {
          loggedIn: token ? true : false,
          topRead: { name: "Not Checked" },
        };
      }
      getHashParams() {
        var hashParams = {};
        var e,
          r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
        e = r.exec(q);
        while (e) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
          e = r.exec(q);
        }
        return hashParams;
      }
    
      getTopRead() {
        spotifyApi.getMyTopArtists().then((response) => {
          this.setState({
            topRead: {
              one: response.items[0].name,
              two: response.items[1].name,
              three: response.items[2].name,
              four: response.items[3].name,
              five: response.items[4].name,
            },
          });
          console.log(response);
        });
      }
      render() {
    return (
        <div className= "chats">
            <h1>Profile</h1>
            {this.state.loggedIn === false && (
          <a href="http://localhost:8888"> Login to Spotify </a>
        )}
        <div>
          Top Artists:
          <ol>
            <li>{this.state.topRead.one} </li>
            <li>{this.state.topRead.two} </li>
            <li>{this.state.topRead.three} </li>
            <li>{this.state.topRead.four}</li>
            <li>{this.state.topRead.five}</li>
          </ol>
        </div>
        {this.state.loggedIn && (
          <button onClick={() => this.getTopRead()}>Check</button>
        )}
        </div>
    )
}
}

export default Profile;