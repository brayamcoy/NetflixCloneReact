import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Navbar from "../components/Navbar";
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const api_key = "050acc481097509dbc630dbcb2dbbca9";

export default class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({params: PropTypes.object, isExact: PropTypes.bool, path: PropTypes.string, url: PropTypes.string})
    }

    state = {
        movie: {}
    }

    getMovie({id}) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es`)
            .then(res => res.json())
            .then(movie => {
                console.log({movie})
                this.setState({movie})
            })
    }

    componentDidMount() {
        console.log(this.props)
        const {movieId} = this.props.match.params
        this.getMovie({id: movieId})
    }

    render() {
        const {
            title,
            backdrop_path,
            overview,
            release_date,
            vote_average
        } = this.state.movie

        return (
          <div class="wrapper">
            <ButtonBackToHome />
            <div class="wrapper-detail">
                <div className="detail">
                    <div class="relative">
                        <img
                            src={"https://image.tmdb.org/t/p/w500" + backdrop_path}/>
                        <div class="absolute">
                            <div class="box">
                                <h2>{title}</h2>
                                <div class="flex">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <h6>{new Date(release_date).getFullYear()}</h6>
                                    <h6> Votos: {vote_average}</h6>
                                </div>
                                <p class="mt-4">{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
