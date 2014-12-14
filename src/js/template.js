function nav(rootDir){
	$.ajax({
		url: rootDir + "src/templates/nav.html",
		cache: false,

		success: function(html){
			html = html.replace(/\{\$root\}/g, rootDir); //footer.htmlの{$root}を置換
			document.write(html);
		}

	});

}
