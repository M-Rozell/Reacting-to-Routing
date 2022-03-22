import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Vehicles = () => {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/vehicles')
            .then(res => res.json())
            .then(data => setVehicles(data))
            .catch(e => alert(e.message))
    }, []);

    return (

        <main className="container mt-5 mb-5">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <ul className="list-group">
                        {vehicles.map(vehicle => (
                            <li
                                key={`vehicles=${vehicle.id}`}
                                className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{vehicle.name}</span>
                                <Link to={`/vehicles/${vehicle.id}`} className="btn btn-outline-success">
                                    Full Details
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </section>
        </main>

    )
}

export default Vehicles;