window.onload = init;
function init() {
	const search = document.querySelector('.search');
	const suggestions = document.querySelector('.suggestions')
	
	const endpoint = 'https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json';
	const poetries = [];
	fetch(endpoint)
		.then(blob => blob.json())
		.then(data => poetries.push(...data));
		
	function findMatches(wordToSearch, poetries) {
		return poetries.filter(poetry => {
			const regex = new RegExp(wordToSearch, 'gi');
			const author = poetry.detail_author.join('');
	//		console.log(poetry);
			return poetry.detail_text.match(regex) || poetry.title.match(regex) || author.match(regex);
		});
	}
	
	function displayMatches() {
		const matches = findMatches(this.value, poetries);
		const regex = new RegExp(this.value, 'gi');
		const html = matches.map(poem => {
			const text = poem.detail_text.replace(regex, `<span class='hl'>${ this.value }</span>`);
			const title = poem.title.replace(regex, `<span class= 'hl'>${ this.value }</span>`)
			return `
				<li>
					<span class='poet'>${text}</span>
					<span class = "title">${title} - ${poem.detail_author[0]} </span>
				</li>
			`;
		}).join(''); //原本是一个数组，要用join将其变成字符串
//		console.log(html);
		suggestions.innerHTML = html;
	}
	
	search.addEventListener('change', displayMatches);
	search.addEventListener('keyup', displayMatches);
}

