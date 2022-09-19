import TableRow from './components/TableRow.js';
import style from './style/App.module.css';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { addBathroom } from './apiCalls.js';

function App() {

    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/locations')
            .then((res) => res.json())
            .then((data) => setTableRows(data.map((br) => <TableRow bathroom={br}/>)));
    }, []);

    return (
        <>
            <div className={style.blueBar}></div>
            <div className={style.container}>
                <div className={style.content}>
                    <h1>Modify Bathrooms Database</h1>
                    <Popup trigger={<button>Add</button>} position="right center">
                        <div>Popup content here !!</div>
                    </Popup>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Building</th>
                            <th>Admin Rating</th>
                            <th>Gender</th>
                            <th>Manage</th>
                        </tr>
                        {tableRows}
                    </table>
                </div>
            </div>
        </>
    );
}

export default App;
