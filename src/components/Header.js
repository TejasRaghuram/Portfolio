import Portrait from './../images/Portrait.JPG';

function Header() 
{
    return (
        <div id="header">
            <img src={Portrait} alt="" />
            <h3>👋 Hello, my name is</h3>
            <h1>Tejas Raghuram</h1>
            <p>
                Software Engineer, CS @ Northeastern University, Designer, Developer, and more!
                <br />
                Welcome to my Portfolio!
            </p>
            <p>Get to know me on</p>
            <h3>
                <a href="https://www.linkedin.com/in/tejasr06/">LinkedIn</a>
                &nbsp;•&nbsp;
                <a href="https://github.com/tejasraghuram">GitHub</a>
                &nbsp;•&nbsp;
                <a href="raghuram.t@northeastern.edu">Email</a>
                &nbsp;•&nbsp;
                <a href="https://www.instagram.com/tejas_r06">Instagram</a>
            </h3>
        </div>
    );
}

export default Header;