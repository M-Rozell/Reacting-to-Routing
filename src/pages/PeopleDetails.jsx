
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PeopleDetails = () => {

    const { peopleid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message))
    }, [peopleid]); //array dependency

    return (

        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow rounded">
                        <div className="card-body">
                            <h2 className="card-title">{details?.name}</h2>
                            <h6 className="card-subtitle mt-2">Gender: {details?.gender}</h6>
                            <h6 className="card-subtitle mt-1">Age: {details?.age}</h6>
                            <h6 className="card-subtitle mt-1">Eye Color: {details?.eye_color}</h6>
                            <h6 className="card-subtitle mt-1">Hair Color: {details?.hair_color}</h6>
                            <Link to="/people" className="btn btn-outline-success mt-3">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PeopleDetails;
