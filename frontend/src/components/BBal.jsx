import React, { useState, useEffect, use } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function BBal({foglal, setFoglal, szoba, setSzoba}) {
    const [data, setData] = useState([]); 
    
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    
    async function buttonFetch(){
        setSzoba(document.getElementById("szobak").value);
        console.log(szoba)
        
            
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
    useEffect(() => {if(!szoba) return;
        async function fetchData() {
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
                console.log(foglal);
            }  
        }
        fetchData();
        
    }, [szoba]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
        
    return (
        <>
           
            <div className="col-md-6 col-sm-12 float-start">
                <h3>A vendégszobák foglalatsága</h3>
                <div>
                    <p>Válassza ki, melyik szoba adatait szeretné látni!</p> <br />
                    <select name="szobak" value={szoba || ""} id="szobak" onChange={buttonFetch} >
                    <option value="" disabled>-- Válassz szobát! --</option>
                    {data.map((szoba) => (
                        <option key={szoba.szazon} value={szoba.sznev} >{szoba.sznev}</option>
                      )
                    )}
                    </select>
                    <br /><br />
                    <Link to="/szoba" ><button>Kiválaszt</button></Link>
                    
                    
                </div>
            </div>
                
        
            
        </>
    )
}
export default BBal;