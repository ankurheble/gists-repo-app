import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";

export class RepoList extends React.Component {
  render() {
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Repo URL</th>
            </tr>
          </thead>
          <tbody>
            {this.props.repos.map(repo => {
              return (
                <tr key={repo.id}>
                  <td>
                    <Link to={`/repos/${repo.name}`}>{repo.name}</Link>
                  </td>
                  <td>{repo.url}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export class Repo extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>{this.props.repo.name}</h1>
        <p>Owner : {this.props.repo.full_name}</p>
      </div>
    );
  }
}

export class MyRepoState extends React.Component {
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
        <Route
          exact
          path="/repos/:repoName"
          component={({ match }) => {
            console.log(match);
            return (
              <Repo
                repo={this.state.repos.find(
                  repo => repo.name === match.params.repoName
                )}
              />
            );
          }}
        />
        <RepoList repos={this.state.repos} />
      </Fragment>
    );
  }
}
