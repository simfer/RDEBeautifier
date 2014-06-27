define({
	js_beautify : function(oDataDoc) {

	return oDataDoc.replace(/;/g, ";\n");
    //return JSON.stringify(JSON.parse(oDataDoc),null,2);  
	}
});