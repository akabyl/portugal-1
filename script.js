// basic mobile nav toggle and FAQ accordion
function toggleMobileNav() {
	const nav = document.querySelector('.nav');
	if (!nav) return;
	if (window.innerWidth <= 900) {
		nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
		nav.style.flexDirection = 'column';
		nav.style.position = 'absolute';
		nav.style.right = '18px';
		nav.style.top = '64px';
		nav.style.background = 'rgba(3,3,8,0.9)';
		nav.style.padding = '10px';
		nav.style.borderRadius = '8px';
	}
}

// FAQ accordion
document.addEventListener('click', function (e) {
	if (e.target.matches('.faq-q')) {
		const btn = e.target;
		const expanded = btn.getAttribute('aria-expanded') === 'true';
		const allBtns = document.querySelectorAll('.faq-q');
		allBtns.forEach((b) => b.setAttribute('aria-expanded', 'false'));
		const allA = document.querySelectorAll('.faq-a');
		allA.forEach((a) => (a.style.display = 'none'));

		if (!expanded) {
			btn.setAttribute('aria-expanded', 'true');
			const panel = btn.nextElementSibling;
			if (panel && panel.classList.contains('faq-a')) panel.style.display = 'block';
		}
	}
});

// small enhancement: highlight active nav item based on filename
(function setActiveNav() {
	const links = document.querySelectorAll('.nav-link');
	const path = location.pathname.split('/').pop();
	links.forEach((a) => {
		if (
			a.getAttribute('href') === path ||
			(path === '' && a.getAttribute('href') === 'index.html')
		) {
			a.classList.add('active');
		} else {
			a.classList.remove('active');
		}
	});
})();
