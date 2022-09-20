// set of api call functions
const addBathroom = async (name, building, admin_rating, gender) => {
    // params use snake case to be consistent with SQL
    await fetch('http://localhost:3001/locations/add', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            building: building,
            admin_rating: admin_rating,
            gender: gender
        }),
        headers: {
         'Content-type': 'application/json; charset=UTF-8',
        },
   });
}

const editBathroom = async (name, building, admin_rating, gender, id) => {
    await fetch(`http://localhost:3001/locations/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: name,
            building: building,
            admin_rating: admin_rating,
            gender: gender,
            id: id
        }),
        headers: {
         'Content-type': 'application/json; charset=UTF-8',
        },
   });
}

const deleteBathroom = async (id) => {
    await fetch(`http://localhost:3001/locations/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: id
        }),
        headers: {
         'Content-type': 'application/json; charset=UTF-8',
        },
   });
}

export { addBathroom, editBathroom, deleteBathroom };