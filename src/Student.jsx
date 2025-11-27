
function Student(props){

    const styles  = {
        border: '1px solid#dadce0',
        borderRadius: '8px',
        fontSize: '1.2rem',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '0px 10px',
        margin: '10px',
    }

    return(
        <div className="student" style={styles}>
            <p><b>Name: </b>{props.name}</p>
            <p><b>Age: </b>{props.e}</p>
            <p><b>Student: </b>{props.isStudent ? 'yes' : 'no'}</p> <br />
        </div>
    )
}

export default Student