var oldHtml = document.getElementById("text").innerHTML;

document.getElementById('btn').addEventListener('click', function() {
	var str = document.getElementById("text-to-find").value;

	if (str === 'undefined' || str.trim() == '') {
		alert('Введите для поиска строку');
	} else {
		var html = document.getElementById("text").innerHTML;
		var text = document.getElementById("text").textContent;
		var reg = new RegExp(str, "igm");
		if (reg.test(text)) {			
			var matches = text.match(reg);
			var uniqueElements = [];
			for (var i = 0; i < matches.length; i++) {				
				if (uniqueElements.indexOf(matches[i]) < 0) { // т.е. элемента нет  в массиве
					uniqueElements.push(matches[i]);					
				}
			};				
			for (var i = 0; i < uniqueElements.length; i++) {
				document.getElementById("text").innerHTML 
				= document.getElementById("text").innerHTML
				.replace(new RegExp(uniqueElements[i], 'g'), 
				'<span style="background-color: #66bfea;">'+uniqueElements[i]+'</span>');
			};						
		} else {
			alert('Данное слово или фраза в тексте не обнаруженно');
		};
	}	
})

document.getElementById('reset').addEventListener('click', function() {
	document.getElementById("text").innerHTML = oldHtml;
	document.getElementById("text-to-find").value = '';
});