import React, { useState, useEffect, use } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function BBal({ szoba, setSzoba }) {
    const [data, setData] = useState([]); 
    const [foglal, setFoglal] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [szobasok, setSzobasok] = useState(null);
    async function buttonFetch(){
        console.log(szoba)
        setLoading(true);
        try{
            const res = await fetch(`http://localhost:3001/foglalt/${szoba}`);
            const json = await res.json();
            setFoglal(json);
        }
        catch(error){
            console.error("fetch failed");
        }
        finally{
            setLoading(false);
        }
            setSzobasok( 
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Szoba neve</th>
                            <th>Vendégek száma</th>
                            <th>foglalt éjszakák száma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foglal.map((fog) => (
                            <tr key={fog.vsorsz}>
                                <td>{fog.vnev}</td>
                                <td>{fog.erk}</td>
                                <td>{fog.tav}</td>
                            </tr>
                        ))}
                    </tbody>    
                </table>
            );
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
        <>
           
            <div className="col-md-6 col-sm-12 float-start">
                <h3>A vendégszobák foglalatsága</h3>
                <div>
                    <p>Válassza ki, melyik szoba adatait szeretné látni!</p> <br />
                    <select name="szobak" value={szoba || ""} id="szobak" onChange={(e) => setSzoba(e.target.value)} >
                    {data.map((szoba) => (
                        <option key={szoba.szazon} value={szoba.sznev} >{szoba.sznev}</option>
                      )
                    )}
                    </select>
                    <br /><br />
                    <button onClick={buttonFetch}>Kiválaszt</button>
                    {szobasok && szobasok}
                </div>
            </div>
                
        
            
        </>
    )
}
export default BBal;