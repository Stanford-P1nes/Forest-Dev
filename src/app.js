window.addEventListener('DOMContentLoaded', () => {
	// Всем ссылкам, у которых значение атрибута href равна '#'
	const links = document.querySelectorAll('a')
	links.forEach(link => {
		link.addEventListener('click', event => {
			if (event.target.getAttributeNode('href').value === '#')
				event.preventDefault()
		})
	})

	// Анимация при скролле
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) entry.target.classList.add('show')
			})
		},
		{ threshold: 0 }
	)

	const animationElements = document.querySelectorAll('.animation')
	for (let element of animationElements) {
		observer.observe(element)
	}

	// Эффект печатной машинки
	let inputText =
		'Это платформа для создания и управления интернет-магазинами. Она позволяет предпринимателям легко запускать свои онлайн-бизнесы без необходимости глубоких технических знаний.'
	const text = document.querySelectorAll('.typeWriterText')

	function typeWriter(elements, text, speed) {
		let i = 0
		function type() {
			if (i < text.length) {
				elements.forEach(element => {
					element.innerHTML += text.charAt(i)
					i++
				})
				setTimeout(type, speed)
			}
		}
		type()
	}
	typeWriter(text, inputText + ' ', 10)

	// Предотвращаем перезагрузку страницы после отправки формы
	const feedBackForm = document.querySelectorAll('.feedBackForm--js')
	feedBackForm.forEach(form => {
		form.addEventListener('submit', event => {
			event.preventDefault()
		})
	})

	// анимация картинки Hero секции при скролле
	const heroSection = document.getElementById('Hero')
	window.addEventListener('scroll', () => {
		// Переменная translateY содержит в себе 
		const scrollPositionY = window.pageYOffset || document.documentElement.scrollTop
		heroSection.style.setProperty('--translateY', `-${scrollPositionY / 8}px`)
	})
})