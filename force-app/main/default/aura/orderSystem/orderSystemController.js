({
    doInit :  function(component, event, helper){
        var action = component.get("c.getNotebookRecords");

        action.setCallback(this,function(response){
            var state = response.getState(); 
            if (component.isValid() && state === "SUCCESS"){
                console.log(JSON.stringify(response.getReturnValue()));
                component.set("v.notebookList", response.getReturnValue());  // Adding values in Aura attribute variable.   
            }               
        });

        $A.enqueueAction(action);
    },

    handleEventNotebook :function(component, event, helper) {
        var updateSelected = event.getParam("notebook");
        // console.log(updateSelected);
        component.set("v.notebookSelected",updateSelected);
        component.set("v.isOpen",true);
        console.log("Select Account in Top level",JSON.stringify(updateSelected));
    },

    handleQuanlityNotebook :function(component, event, helper) {
        var updateSelected = event.getParam("notebook");
        // console.log(updateSelected);
        component.set("v.notebookSelected",updateSelected);
        component.set("v.isOpen",true);
        console.log("Select Account in Top level",JSON.stringify(updateSelected));
    }

})
