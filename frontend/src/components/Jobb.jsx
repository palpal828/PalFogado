import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Jobb(){
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

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
    return(
        <div className='col-md-4 col-sm-6 float-start' id='jobb'>
            <h3>A hét törpe fogadó</h3>
            <table id="table1">
                <thead>
                    <tr className="tr1">
                        <th className="th1">Szoba neve</th>
                        <th className="th1">Ágyak száma</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((szoba) => (
                        <tr key={szoba.szazon} className="tr1">
                            <td className="th1">{szoba.sznev}</td>
                            <td className="th1">{szoba.agy}</td>
                        </tr>
                    ))}
                </tbody>
                
                    
            </table>
            <ul>
                <li>Ruhásszekrény</li>
                <li>Saját fürdőszoba zuhanytálca</li>
                <li>WC (fürdőszobával egyben)</li>
            </ul>
        </div>
    )
}
export default Jobb;