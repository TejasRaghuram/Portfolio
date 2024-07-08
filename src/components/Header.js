import Portrait from './../images/Portrait.JPG';

function Header() 
{
    return (
        <div id="header">
            <div class="relative">
                <img id="portrait" src={Portrait} alt="" />
                <h3>👋 Hello, my name is</h3>
                <h1>Tejas Raghuram</h1>
                <p>
                    Software Engineer, CS @ Northeastern University, Designer, Developer, and more!
                    <br /><br />
                    Welcome to my Portfolio!
                </p>
                <div id="contact">
                    <p id="contact-header">Get to know me on</p>
                    <h3 id="contact-body">
                        <a href="https://www.linkedin.com/in/tejasr06/">LinkedIn</a>
                        &nbsp;•&nbsp;
                        <a href="https://github.com/tejasraghuram">GitHub</a>
                        &nbsp;•&nbsp;
                        <a href="mailto: raghuram.t@northeastern.edu">Email</a>
                        &nbsp;•&nbsp;
                        <a href="https://www.instagram.com/tejas_r06">Instagram</a>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Header;