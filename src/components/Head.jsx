const Head = (props) => {
    return (
        <nav className="nav p-2 pl-4 bg-secondary rounded">
            <h3 className="text-light nav-font">{props.title}</h3>
        </nav>
    );
}

export default Head;