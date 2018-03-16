const content = [
	{
		id: 'jung',
		type: 'text'
	},
	{
		id: 'paterson',
		type: 'text'
	},
	{
		id: 'st-julian' ,
		type: 'text'
	},
	{
		id: 'alien' ,
		type: 'text',
		font: 'courier'
	},
	{
		id: 'watt-2' ,
		type: 'text'
	},
	{
		id: 'the-dead',
		type: 'text'
	},
	{
		id: 'ALP',
		type: 'text'
	},
	{
		id: '2Op3QLzMgSY',
		type: 'video'
	}
];

const order = [];
while (order.length < content.length) {
	const randomIndex = Math.floor(Math.random() * content.length)
	if (!order.includes(randomIndex)) {
		order.push(randomIndex)
	}
}

const main = document.querySelector('.js-main');
const els = Promise.all(order.map(async index => {
	const item = content[index];
	const el = document.createElement('div');
	el.classList.add(
		'js-content-item',
		'measure',
		'lh-copy',
		'f5', 'f3-ns',
		'pv4',
		'bb',
		'tj'
	)
	if (item.font) el.classList.add(item.font);

	if (item.type === 'text') {
		el.innerText = await fetch(`./texts/${item.id}.txt`).then(res => res.text());
	} else if (item.type === 'video') {
		el.innerHTML = `<iframe
			width="100%"
			height="400"
			src="https://www.youtube.com/embed/${item.id}"
			frameborder="0"
			allow="autoplay; encrypted-media"
			allowfullscreen/>`;
	}

	return el;
}))
	.then(els =>
		els.forEach(el =>
			main.appendChild(el)));


const nextButton = document.querySelector('.js-next')
nextButton.addEventListener('click', () => {
	const contentItems = document.querySelectorAll('.js-content-item');
	const next = [...contentItems].find(text =>
		text.getBoundingClientRect().bottom > 0)
			.nextSibling
	next && (next.getBoundingClientRect().bottom > window.innerHeight)
		? next.scrollIntoView()
		: contentItems[0].scrollIntoView();
})
