import { useState } from 'react';
import style from '../style/BathroomEditor.module.css';
import { addBathroom, editBathroom } from '../apiCalls.js';

function BathroomEditor(props) {

    const [name, setName] = useState(props.name);
    const [building, setBuilding] = useState(props.building);
    const [adminRating, setAdminRating] = useState(props.adminRating);
    const [gender, setGender] = useState(props.gender);

    return (
        <div className={style.container}>
            <h4>Name</h4>
            <input type="text" defaultValue={props.name} onChange={(e) => {setName(e.target.value)}}/>
            <h4>Building</h4>
            <input type="text" defaultValue={props.building} onChange={(e) => {setBuilding(e.target.value)}}/>
            <h4>Admin Rating</h4>
            <input type="number" min={1} max={10} defaultValue={props.adminRating} onChange={(e) => {setAdminRating(e.target.value)}}/>
            <h4>Gender</h4>
            <input type="text" defaultValue={props.gender} onChange={(e) => {setGender(e.target.value)}}/>
            <button onClick={() => {
                console.log({name: name, building: building, adminRating: adminRating, gender: gender});
                if (props.call == "add") {
                    addBathroom(name, building, adminRating, gender);
                    window.location.reload(false);
                } else if (props.call == "edit") {
                    editBathroom(name, building, adminRating, gender, props.id);
                    window.location.reload(false);
                }
            }}>Submit</button>
        </div>
    )
}

BathroomEditor.defaultProps = {
    name: "",
    building: "",
    adminRating: 1,
    gender: "M", // i'm a guy so i will likely only be adding male bathrooms to this list
    call: "add"
}

export default BathroomEditor;