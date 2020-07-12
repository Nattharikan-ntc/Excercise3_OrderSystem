({
    selectNotebook : function(component, event, helper) {
        var notebook = component.get("v.notebookList");
        var updateEvent = component.getEvent("eventSelectNotebook");
        updateEvent.setParams({ "notebook": notebook });
        updateEvent.fire();
        console.log(JSON.stringify(notebook));
    },
})
