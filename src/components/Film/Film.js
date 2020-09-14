import React from 'react';

class Film extends React.Component {

    showFilmInfo = () => {
        const { insertFilmInfo, film } = this.props;
        insertFilmInfo(film.id);
    }

    onStarsChange = (e) => {
        const value = e.target.getAttribute('data-value')
        const { setStarsOnFilm, film } = this.props;
        setStarsOnFilm(film.id, value);
    }

    renderStars(currentQuantity, defaultQuantity = 5) {
        const items = [];
        const { hash, film } = this.props;

        for (let i = 0; i < defaultQuantity; i++) {
            if (i < film.stars) {
                items.push(
                    <button className="star-btn"
                        data-value={i + 1}
                        onClick={this.onStarsChange}
                        key={hash()}>

                        <i className="fa fa-star star-active"
                            data-value={i + 1}></i>
                    </button>
                )
            } else {
                items.push(
                    <button className="star-btn"
                        data-value={i + 1}
                        onClick={this.onStarsChange}
                        key={hash()}>

                        <i className="fa fa-star"
                            data-value={i + 1}></i>
                    </button>
                )
            }
        }

        return (
            <React.Fragment>
                {items}
            </React.Fragment>
        )
    }

    render() {
        const { film, hash, setLikedFilm, setDislikedFilm } = this.props;


        return (
            <div className="app__films-item film" data-id={film.id} key={hash()}>
                <div className="film__main">
                    <div className="film__likes">
                        <div className="film__btns">
                            <button className={"film__likes-btn like" + (film.liked ? " active" : "")}
                                onClick={setLikedFilm}>

                                <i className="fa fa-thumbs-up"></i>

                            </button>

                            <button className={"film__likes-btn dislike" + (film.disliked ? " active" : "")}
                                onClick={setDislikedFilm}>

                                <i className="fa fa-thumbs-down"></i>

                            </button>
                        </div>
                        <div className="film__likes-main">
                            <span>{film.likes}</span>
                            <span>likes</span>
                        </div>
                    </div>
                    <div className="film__preview">

                        <h3 className="film__title" onClick={this.showFilmInfo}>{film.title}</h3>

                        <div className="film__image">

                            <img src={film.posterUrl}
                                alt={film.title} />

                        </div>
                    </div>
                </div>
                <div className="film__stars">
                    <span>Stars: {film.stars}</span>
                    {this.renderStars()}
                </div>
            </div>
        )
    }
}

export { Film };