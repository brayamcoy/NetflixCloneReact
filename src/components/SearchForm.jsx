import React from 'react'

const api_key = "050acc481097509dbc630dbcb2dbbca9";

export default class SearchForm extends React.Component {
    constructor(props){
        super()
        this.state = {
            inputMovie: ''
        }
    }

  handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { inputMovie } = this.state
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=es&page=1&limit=20&query=${inputMovie}`;
    fetch(url)
      .then(res => res.json())
      .then(myJson => {
        this.props.onResults(myJson.results);
      })
  }

  render () {
    return (
        <form onSubmit={this.handleSubmit}>
                     <input
                        class="search-form"
                        type="search"
                        onChange={this.handleChange}
                        placeholder="Buscar algún titulo..."
                        aria-label="Buscar"
                    />
                    <a href="#" onClick={this.handleSubmit} type="submit">
                        <i class="fas fa-search sub-nav-logo"/>
                    </a>
        </form>
    );
  }
}

{/*  */}