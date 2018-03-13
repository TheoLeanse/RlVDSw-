const texts = [
	'jung',
	'paterson',
	'shelley',
	'sicp',
	'st-julian',
	'the-dead'
];

const order = [];
while (order.length < texts.length) {
	const randomIndex = Math.floor(Math.random() * texts.length)
	if (!order.includes(randomIndex)) {
		order.push(randomIndex)
	}
}

const main = document.querySelector('main');
order.forEach(async index => {
	const text = await fetch(`http://www.theoleanse.com/RlVDSw-/texts/${texts[index]}.txt`).then(res => res.text());
	const p = document.createElement('p');
	p.innerText = text;
	p.classList.add('lh-copy-ns', 'pb4', 'bb', 'mb4')
	main.appendChild(p);
})

const nextButton = document.querySelector('.next')

nextButton.addEventListener('click', () => {
	const textsOnPage = document.querySelectorAll('p');
	const currentText = [...textsOnPage].find(text => text.getBoundingClientRect().bottom > 0);
	currentText.nextSibling ? currentText.nextSibling.scrollIntoView() : textsOnPage[0].scrollIntoView();
})
