document.addEventListener('DOMContentLoaded', () =>{
	const darkModeButton = document.getElementById('icon-container');
	const iconButton = document.getElementById('icon-button');
	const stylesheet = document.getElementById('styles');
	const titleButton = document.getElementById('title-button-mode');
	const gitHubButton = document.getElementById('github-button');

	darkModeButton.addEventListener('click', ()=>{
		if (stylesheet.getAttribute('href') === 'styles/light-mode-stylesheet.css' ) {
			stylesheet.setAttribute('href', 'styles/dark-mode-stylesheet.css');
			titleButton.style.setProperty('font-weight', 'bold');
			titleButton.textContent = "Light Mode";
			iconButton.classList.replace('fa-moon', 'fa-sun');
		}

		else{
			stylesheet.setAttribute('href', 'styles/light-mode-stylesheet.css');
			titleButton.textContent = "Dark Mode";
			iconButton.classList.replace('fa-sun','fa-moon');
		}
	});

	gitHubButton.addEventListener('click', () =>{
		window.open('https://github.com/Jesanchezz?tab=repositories', '_blank');
	});

	//Animacion de desplazamiento de izquerda a derecha
	const sections = document.querySelectorAll('.section-container');
	const observerOptions={
		root:null,
		threshold: 0.1
	};

	const observer = new IntersectionObserver((entries, observer) =>{
		entries.forEach(entry =>{
			if (entry.isIntersecting){
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);
	
	sections.forEach(section =>{
		observer.observe(section);
	});
});


