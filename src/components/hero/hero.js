import styles from './hero.module.css';
import { useState, useEffect } from 'react';

function Hero({id}) {
	const greetings = [
		" Hi, I'm", 
		" Bonjour, je m’appelle", 
		" Привет, меня зовут", 
		" Hallo, ich heiße", 
		" ನಮಸ್ಕಾರ, ನನ್ನ ಹೆಸರು"
	];
	const info = [
		"CS + Math @ UIUC", 
		"Software Engineer", 
		"Full Stack Web Developer", 
		"Detail-Oriented Designer", 
		"Quantum Enthusiast"
	];
	const [index, setIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setIndex((prev) => (prev + 1) % greetings.length);
				setFade(true);
			}, 200); 
		}, 2500);
	
		return () => clearInterval(interval);
	}, []);

	return (
		<section id={id} class={styles.hero}>
			<div>
				<p class={styles.greeting} style={{textAlign: 'left'}}>👋 
					<span class={fade ? styles.in:styles.out}>{greetings[index]}</span>
				</p>
				<h1>Tejas Raghuram</h1>
				<p class={fade ? styles.in:styles.out} style={{textAlign: 'right'}}>{info[index]}</p>
			</div>
		</section>
	);
}

export default Hero;