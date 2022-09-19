function TableRow(props) {
    return (
        <tr>
            <td>{props.bathroom.id}</td>
            <td>{props.bathroom.name}</td>
            <td>{props.bathroom.building}</td>
            <td>{props.bathroom.admin_rating}</td>
            <td>{props.bathroom.gender}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default TableRow;