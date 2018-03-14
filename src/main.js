const texts = [
	'jung',
	'paterson',
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

const main = document.querySelector('.js-main');
order.forEach(async index => {
	const text = await fetch(`http://theoleanse.com/RlVDSw-/texts/${texts[index]}.txt`).then(res => res.text());
	const el = document.createElement('div');
	el.innerText = text;
	el.classList.add(
		'js-text',
		'measure',
		'lh-copy',
		'f5', 'f3-ns',
		'pv4',
		'bb'
	)
	main.appendChild(el);
})

const nextButton = document.querySelector('.js-next')
nextButton.addEventListener('click', () => {
	const textsOnPage = document.querySelectorAll('.js-text');
	const nextText = [...textsOnPage].find(text => text.getBoundingClientRect().bottom > 0).nextSibling;
	nextText ? nextText.scrollIntoView() : textsOnPage[0].scrollIntoView();
})
