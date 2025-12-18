import styles from './navbar.module.css';
import { useState } from 'react';

function Navbar(props) {
    const [currentSection, setCurrentSection] = useState(0);

    document.addEventListener('scroll', () => {
        let maxVisibility = 0;
        let selectedIndex = 0;

        for (let i = 0; i < props.items.length; i++) {
            const section = document.getElementById(props.items[i].href.substring(1)).getBoundingClientRect();

            const visibleTop = Math.max(section.top, 0);
            const visibleBottom = Math.min(section.bottom, window.innerHeight);
            const visibility = Math.max(0, visibleBottom - visibleTop) / (section.bottom - section.top);

            if (visibility > maxVisibility) {
                maxVisibility = visibility;
                selectedIndex = i;
            }
        }

        setCurrentSection(selectedIndex);
    });

    return (
        <nav class={styles.nav}>
            {props.items.map((item, i)=>(
                <a href={item.href} class={i == currentSection ? styles.selected:''}>
                    {item.content}
                </a>
            ))}
        </nav>
    );
}

export default Navbar;