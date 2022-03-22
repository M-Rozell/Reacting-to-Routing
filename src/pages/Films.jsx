
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(e => alert(e.message))
    }, []);

    return (

        <section className="row justify-content-center mt-5 mb-5">
            <div className="col-md-6">
                <ul className="list-group">
                    {films.map(film => (
                        <li
                            key={`film=${film.id}`}
                            className="list-group-item align-items-center">
                            <h3>{film.title}</h3>
                            <div>{film.description}</div>
                            <Link to={`/films/${film.id}`} className="btn btn-outline-success m-2">
                                Full Details
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}
export default Films;







