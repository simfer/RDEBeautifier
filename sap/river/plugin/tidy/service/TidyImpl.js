define([ "./js_beautify" ], function(js_beautify) {

	return {
		_tidyUp : function() {

            var contentService = this.context.service.content;
            var oDocument;
            return contentService.getCurrentDocument()
            .then(function(oDoc) {
                //set the document on parent scope
                oDocument = oDoc;
                //get the content from the document
                return oDoc.getContent();
            }).then(function(sContent) {
                //beautify the content and save it back
                sContent = js_beautify.js_beautify(sContent);
                oDocument.setContent(sContent);
                return contentService.getCurrentEditor();
            }).then(function(oEditor){
                oEditor.open(oDocument,true);
            });
 
		},

		tidyUp : function() {
			this._tidyUp();
		}
	};
});
