function ArrComponent(prop){
    return <div>
        <table border={1}>
            <tr>
                <td>Name : {prop.person.name}</td>
                <td>Education : {prop.person.education}</td>
                <td>City : {prop.person.city}</td>
                <td>Age : {prop.person.age}</td>
                <td>Contact: {prop.person.contact}</td>
            </tr>
        </table>
    </div>
}

export default ArrComponent;