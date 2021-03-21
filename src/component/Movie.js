import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";

export default class Movie extends Component {
  state = {
    movies: [],
  };

  handleDelete = (id) => {
    const { movies } = this.state;
    movies.filter((movie) => movie.id !== id);
  };

  componentDidMount() {
      const movies = getMovies()
      this.setState({movies})
  }
  

  render() {
    const { movies } = this.state;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th className='col'>Title</th>
            <th className='col'>Genre</th>
            <th className='col'>Stock</th>
            <th className='col'>Rate</th>
            <th className='col'></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie._id} className='row'>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.handleDelete(movie._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
