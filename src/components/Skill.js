function Skill(props) 
{
    return (
        <div id="skill">
            <img id="skill-image" src={props.image} alt=""/>
            <p id="skill-title">{props.name}</p>
        </div>
    );
}

export default Skill;