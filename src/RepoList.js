import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export class RepoList extends React.Component {
  render() {
    return (
      <Fragment>
        <table className="table table-bordered table-sm">
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

export function Repo(props) {
  return (
    <div>
      <h1>{props.repo.name}</h1>
      <p>{props.repo.url}</p>
      <p>Owner : {props.repo.full_name}</p>
      <p>{props.repo.clone_url}</p>
    </div>
  );
}
