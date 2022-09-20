import BathroomEditor from './BathroomEditor.js';
import Popup from 'reactjs-popup';
import { deleteBathroom } from '../apiCalls.js';

function TableRow(props) {
    return (
        <tr>
            <td>{props.bathroom.id}</td>
            <td>{props.bathroom.name}</td>
            <td>{props.bathroom.building}</td>
            <td>{props.bathroom.admin_rating}</td>
            <td>{props.bathroom.gender}</td>
            <td>
                <Popup trigger={<button>Edit</button>} position="right center" modal>
                    <BathroomEditor 
                        name={props.bathroom.name} 
                        building={props.bathroom.building} 
                        adminRating={props.bathroom.admin_rating}
                        gender={props.bathroom.gender}
                        call="edit"
                        id={props.bathroom.id}/>
                </Popup>
                <button onClick={() => {
                    deleteBathroom(props.bathroom.id);
                    window.location.reload(false);
                }}>Delete</button>
            </td>
        </tr>
    )
}

export default TableRow;