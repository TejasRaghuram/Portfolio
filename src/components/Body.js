import Project from "./Project";
import Skill from "./Skill";
import StuVis from "./../images/StuVis.png";
import IPL from "./../images/IPL.png";
import TeChess from "./../images/TeChess.png";
import SBCREW from "./../images/SBCREW.png";
import Attendance from "./../images/Attendance.png";
import Game from "./../images/Game.png";

function Body() 
{
    return (
        <div id="body">
            <h2>About</h2>
            <p>Hi! I’m an undergraduate student at Northeastern University with a deep fascination for computer science, especially software development. My interests span across various subfields, including competitive programming, quantum computing, and website design. As a full stack developer, I’ve gained experience in a wide range of languages and frameworks, allowing me to build and contribute to diverse projects. Outside of the world of programming, I enjoy cubing, playing cricket and football, and immersing myself in video games.</p>
            <h2>Projects</h2>
            <Project name="StuVis" image={StuVis} description="Student Data Visualization Web Application with AI Integration for the South Brunswick School District" link="https://github.com/TejasRaghuram/StuVis"/>
            <Project name="IPL Fantasy" image={IPL} description="Web Application for Fantasy Cricket with the Indian Premier League" link="https://github.com/TejasRaghuram/IPL-Fantasy"/>
            <Project name="TeChess" image={TeChess} description="A Chess Bot Implementation of Monte Carlo Tree Search" link="https://github.com/TejasRaghuram/TeChess"/>
            <Project name="750 SBCREW" image={SBCREW} description="Landing Page Template for South Brunswick Robotics" link="https://github.com/TejasRaghuram/750SBCREW"/>
            <Project name="Attendance" image={Attendance} description="Mobile Application Designed to Scan ID Cards and Track Attendance" link="https://github.com/TejasRaghuram/Attendance"/>
            <Project name="Chaos In Space" image={Game} description="2D Platformer Video Game Designed and Developed During a Game Jam" link="https://tr06.itch.io/chaos-in-space"/>
            <h2>Skills</h2>
            <h3>Languages</h3>
            <div class="skill-box">
                <Skill name="Java" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/java.svg" />
                <Skill name="HTML" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/html.svg" />
                <Skill name="CSS" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/css.svg" />
                <Skill name="JavaScript" small={true} image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/javascript.svg" />
                <Skill name="C#" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/c%23.svg" />
                <Skill name="Python" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/python.svg" />
                <Skill name="C++" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/c++.svg" />
                <Skill name="Kotlin" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/kotlin.svg" />
            </div>
            <h3>Developer Tools</h3>
            <div class="skill-box">
                <Skill name="Git" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/git.svg" />
                <Skill name="Unity" image="https://i.redd.it/tu3gt6ysfxq71.png" />
                <Skill name="Android Studio" small={true} image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/android.svg" />
                <Skill name="Firebase" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/cloud/firebase.svg" />
                <Skill name="Blender" image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png" />
                <Skill name="MongoDB" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/databases/mongodb.svg" />
                <Skill name="VS Code" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/text%20editors/vscode.svg" />
                <Skill name="Postman" image="https://www.svgrepo.com/show/354202/postman-icon.svg" />
            </div>
            <h3>Libraries/Frameworks</h3>
            <div class="skill-box">
                <Skill name="React" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg" />
                <Skill name="Node.js" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/nodejs.svg" />
                <Skill name="Express" image="https://img.icons8.com/color/512/express-js.png" />
                <Skill name="TensorFlow" small={true} image="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-tensorflow-icon.png" />
                <Skill name="Django" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/django.svg" />
                <Skill name="React Native" small={true} image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg" />
                <Skill name="SvelteKit" image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/social%20icons/svelte.svg" />
                <Skill name="Spring Boot" small={true} image="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/spring.svg" />
            </div>
        </div>
    );
}

export default Body;