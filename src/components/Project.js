function Project(props) 
{
    return (
        <div>
            <img src={props.image} alt=""/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Project;