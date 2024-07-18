function Project(props) 
{
    return (
        <div onClick={() => {
            window.location.href= props.link;
        }} class="project">
            <img id="project-image" src={props.image} alt=""/>
            <h3>{props.name}</h3>
            <p id="project-text">{props.description}</p>
        </div>
    );
}

export default Project;