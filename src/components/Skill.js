function Skill(props) 
{
    return (
        <div id="skill">
            <img id="skill-image" src={props.image} alt=""/>
            <p class={props.small ? "small" : ""} id="skill-title">{props.name}</p>
        </div>
    );
}

export default Skill;