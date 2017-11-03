
	
	const endpoint = 'https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json';
	const poetries = [];
	
		



//window.onload = init;
//
//function init() {
//	const poetries = [];
//	const endpoint = 'https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json';
//	fetch(endpoint)
//		.then(blob => blob.json())
//		.then(data => poetries.push(...data));
//	
//	
//	function findMatches(wordToSearch, poetries) {
//		return poetries.filter(poetry => {
//			const regex = new RegExp(wordToSearch, 'gi');
//			//建立正则表达式对象
//			const author = poetry.detail_author.join('');
//			//找出匹配的对象
//			return poetry.detail_text.match(regex) || author.match(regex) || poetry.title.match(regex);
//		})
//	}
//	
//	function displayMatches() {
//		const matches = findMatches(this.value, poetries);
//		const regex = new RegExp(this.value, 'gi');
//		//这里将来设置html文本信息。
//		const html = matches.map(poem => {
//			//这里表示用后者替换前者，来讲匹配的文字高亮
//			const text = poem.detail_text.replace(regex, `<span class = "hl">${ this.value }</span>`);
//			const title = poem.title.replace(regex, `<span class = "hl">${ this.value }</span>`);
//			return `
//				<li>
//					<span class='poet'>${text}</span>
//					<span class = "title">${title} - ${poem.detail_author[0]} </span>
//				</li>
//			`;
//		}).join('');
//		suggestions.innerHTML = html;
//	}
//	
//	const search = document.querySelector('.search');
//	const suggestions = document.querySelector('.suggestions');
//	
//	search.addEventListener('change', displayMatches);
//	search.addEventListener('keyup', displayMatches);
//}
