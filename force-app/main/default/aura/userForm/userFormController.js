({
    doInit : function(component, event, helper) {
        // var userForm = component.get("v.userForm");
        var totalCost = component.get("v.totalCost");
        component.set("v.userForm.Order_amount__c",totalCost);
    },

    clickCreate : function(component, event, helper) {
        var userForm = component.get("v.userForm");
        console.log("User Form "+ JSON.stringify(userForm));

        var notebookListOfUser = component.get("v.notebookListOfUser"); 
        console.log("Notebook Selected" + JSON.stringify(notebookListOfUser));

        var notebookListOfUserId = component.get("v.notebookListOfUserId"); 
        console.log("List Id" + JSON.stringify(notebookListOfUserId));


        var foems = component.get("v.userForms");
        for(var j=0;j<notebookListOfUser.length;j++){
            foems.push(userForm);

        }
        console.log("foems    "+JSON.stringify(foems));

        var i;
        var priceTotal = 0;
        console.log("loop UserForm");
        for(i=0 ; i < notebookListOfUser.length; i++){
            console.log('loop id');
            console.log(notebookListOfUser[i].Id);
            notebookListOfUserId.push(notebookListOfUser[i].Id);
            console.log("List Id" + JSON.stringify(notebookListOfUserId));
            //component.set("v.notebookObjects[i].priceTotal",priceTotal);
        } 

        var action = component.get("c.saveUserForm");
        action.setParams({
            "userForm": foems,
            "notebookListOfUserId": notebookListOfUserId
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var userForm = component.get("v.userForm");
                console.log("Success!!");
                console.log( JSON.stringify(response.getReturnValue()));
                
                var evt = $A.get("e.force:navigateToComponent");
                console.log('Event '+evt);
                evt.setParams({
                    componentDef  : "c:userSummary",
                    componentAttributes: {
                        userForm : userForm,
                        notebookListOfUser : notebookListOfUser
                    }
                });
                evt.fire();
                // userForm.push(response.getReturnValue());
                // component.set("v.userForm", userForm);
            }
        });
        $A.enqueueAction(action);

    },

        // userForm.totalCost = totalCost;
        // component.set("v.userForm",userForm);
        // console.log("Infomation User",JSON.stringify(userForm));



        // var i;
        // var UserTotalPay = 0;
        // console.log("loop");
        // for(i=0 ; i < notebookOfUser.length; i++){
        //     console.log("Product Selected" + notebookOfUser[i].Name)
        //     UserTotalPay = notebookOfUser[i].PriceTotal;
        //     console.log("Product Selected" + UserTotalPay)
            //component.set("v.notebookObjects[i].priceTotal",priceTotal);
        // }              
    // }

    // backToProductSelected : function(component, event, helper) {
    //     var evt = $A.get("e.force:navigateToComponent");
    //     console.log('Event '+evt);
    //     evt.setParams({
    //         componentDef  : "c:productSelected",
    //         componentAttributes: {
    //             //notebookObjects : component.get("v.notebookObjects"),
    //             // numberofNotebook : component.get("v.notebook.Quanlity"),
    //             // newCustomer : { 'sobjectType': 'User__c',
    //             //                 'Name': '',
    //             //                 'Phone__c': '',
    //             //                 'email__c': '',
    //             //                 'address__c': ''
    //             //                     },
    //             // productlist : component.get("v.productList")
    //         }
    //     });
    //     evt.fire();
    // }
})
