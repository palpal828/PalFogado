import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function BBal() {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    var selectedRoom = null;
    const handleChange = () => {
        selectedRoom = document.getElementById("szobak").value;
    }
    useEffect(() => {
        fetch(`http://localhost:3001/szobak/`)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
        
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="col-md-6 col-sm-12 float-start">
            <h3>A vendégszobák foglalatsága</h3>
            <div>
                <p>Válassza ki, melyik szoba adatait szeretné látni!</p> <br />
                <select name="szobak" id="szobak">
                {data.map((szoba) => (
                    <option key={szoba.szazon} value={szoba.szazon}>{szoba.sznev}</option>
                  )
                )}
                </select>
                <br /><br />
                <button onClick={handleChange}>Kiválaszt</button>
            </div>
        </div>
    )
}
export default BBal;