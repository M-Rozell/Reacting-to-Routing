import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FilmDetails = () => {

    const { filmid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message))
    }, [filmid]); //array dependency

    return (

        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow rounded text-center ">
                        <img className="card-top" src={details?.image} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{details?.title}</h4>
                            <h6 className="card-subtitle">{details?.original_title}</h6>
                            <h6 className="card-subtitle mt-3">Director: {details?.director}</h6>
                            <h6 className="card-subtitle mt-1">Producer: {details?.producer}</h6>
                            <p className="card-text mt-3">{details?.description}</p>
                            <h6 className="card-subtitle">{details?.release_date}</h6>
                            <p className="card-subtitle mt-2">Run Time: {details?.running_time}min</p>
                            <h6 className="card-subtitle mt-2"> Rotten Tomato: {details?.rt_score > 50 ? <span className="text-success">{details?.rt_score}</span> : <span className="text-danger">{details?.rt_score}</span>}</h6>
                            <Link to="/films" className="btn btn-outline-success mt-4">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmDetails;
