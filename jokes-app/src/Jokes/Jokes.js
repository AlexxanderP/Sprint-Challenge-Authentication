import React from "react";
import axios from "axios";

import requiresAuth from "../auth/requiresAuth";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <>
        <h2 className="joke-title">Dad Jokes of the Year</h2>
        <div className="jokes-container">
          {this.state.jokes.map(joke => (
            <p key={joke.id} className="joke">
              {joke.joke}
            </p>
          ))}
        </div>
      </>
    );
  }

  componentDidMount() {
    const endpoint = `/jokes`;
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(error => {
        console.error("USERS ERROR", error);
      });
  }
}

export default requiresAuth(Jokes);
