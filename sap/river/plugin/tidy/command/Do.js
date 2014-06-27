define({
    execute : function() {
        this.context.service.tidy.tidyUp().done();
    },
    isAvailable : function() {
        return true;
    },
    isEnabled : function() {
        return this.context.service.content.getCurrentDocument().then(function(oDoc){
            return !!oDoc && jQuery.sap.endsWith(oDoc.getEntity().getName(),".js");
        });
    }
});