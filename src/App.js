import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RepoList, Repo } from "./RepoList";
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/ankurheble/repos")
      .then(response => response.json())
      .then(response =>
        this.setState({
          repos: response
        })
      );
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Gists Repo App</h1>
            </header>
            <RepoList repos={this.state.repos} />
            <Route
              exact
              path="/repos/:repoName"
              render={({ match }) => {
                console.log(match);
                console.log(this.state.repos);
                return (
                  <Repo
                    repo={this.state.repos.find(
                      repo => repo.name === match.params.repoName
                    )}
                  />
                );
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
