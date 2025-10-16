import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fogado.css'
function SzobaW({ foglal, szoba }) {
    return (
        <>
        {foglal &&   
            <div className="col-6 mx-auto" id="szobaW">
            <h3>Kiválaszott szoba: {szoba}</h3>
            <table className="table table-striped overflow-auto table-responsive">
                <thead>
                    <tr>
                        <th>Vendég neve</th>
                        <th>Érkezés dátuma</th>
                        <th>Távozás dátuma</th>
                    </tr>
                </thead>
                <tbody>
                    {foglal.map((fog) => (
                        <tr key={fog.vsorsz}>
                            <td>{fog.vnev}</td>
                            <td>{new Date(fog.erk).toLocaleDateString('hu-HU')}</td>
                            <td>{new Date(fog.tav).toLocaleDateString('hu-HU')}</td>
                        </tr>
                    ))}
                </tbody>    
            </table>
            </div>
        }
        </>
    );
}

export default SzobaW;
