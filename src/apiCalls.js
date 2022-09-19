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

export { addBathroom };