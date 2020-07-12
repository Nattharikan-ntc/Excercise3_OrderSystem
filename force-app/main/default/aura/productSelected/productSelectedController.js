({
    backToOrderSystem : function(component, event, helper) {
        var evt = $A.get("e.force:navigateToComponent");
        console.log('Event '+evt);
        evt.setParams({
            componentDef  : "c:orderSystem",
            componentAttributes: {
                //notebookObjects : component.get("v.notebookObjects"),
                // numberofNotebook : component.get("v.notebook.Quanlity"),
                // newCustomer : { 'sobjectType': 'User__c',
                //                 'Name': '',
                //                 'Phone__c': '',
                //                 'email__c': '',
                //                 'address__c': ''
                //                     },
                // productlist : component.get("v.productList")
            }
        });
        evt.fire();
     },

    //  createForm: function(component,event){      
    //     var newform = component.get("v.newForm");
    //     var createRecordEvent = $A.get("e.force:createRecord");
    //     createRecordEvent.setParams({
    //         "entityApiName":"Account",
    //         "defaultFieldValues": {'Account': newform}
    //     });
    //     // console.log("boatTypeId"+boatTypeId);
    //     createRecordEvent.fire();
    // },

    handleNextToForm : function(component, event, helper) {
        var notebookObjects = component.get("v.notebookObjects");
        console.log("notebookObjects" + JSON.stringify(notebookObjects));
        var totalCost = component.get("v.totalCost");

        var evt = $A.get("e.force:navigateToComponent");
        console.log('Event '+evt);
        evt.setParams({
            componentDef  : "c:userForm",
            componentAttributes: {
                notebookListOfUser : notebookObjects,
                totalCost : totalCost
            }
        });
        evt.fire();
     },

})
