const ViewAPIButton = (props) => {
    return (
        <div className="p-2 right">
        <a href={`https://ghibliapi.herokuapp.com/` + props.url} target="_blank" rel="noreferrer" className="btn btn-primary">View API</a>
        </div>
    );
}

export default ViewAPIButton;