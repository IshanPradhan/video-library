import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    // getting movies from the fakemovies js file
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    // Rendering movies except the deleted movie
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies }); // since key and value are same (moveis:movies)
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the Database</p>;

    return (
      // since we can return only one JSX element we have to wrap it in div or react fragment
      <React.Fragment>
        <p>Showing {count} movies from the Database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
