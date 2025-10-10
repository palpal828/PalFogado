import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Gomb(){
    const [szoba, setSzoba] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    

    useEffect(() => {
        fetch(`http://localhost:3001/foglalt/${szoba}`)
        .then((response) => response.json())
        .then((szoba) => {
            setSzoba(szoba);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
        
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
}
function BJobb() {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    

    useEffect(() => {
        fetch(`http://localhost:3001/vendej`)
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
        <div className='col-md-4 col-sm-6 float-start'>
            <h3>A szobák kihassználtsága</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Szoba neve</th>
                        <th>Vendégek száma</th>
                        <th>foglalt éjszakák száma</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((szoba) => (
                        <tr key={szoba.szazon}>
                            <td>{szoba.sznev}</td>
                            <td>{szoba["vendegek szama"]}</td>
                            <td>{szoba["foglalt éjszakák száma"]}</td>
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
export default BJobb;