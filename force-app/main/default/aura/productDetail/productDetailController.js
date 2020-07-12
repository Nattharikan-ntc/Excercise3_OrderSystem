// ({
//     myAction : function(component, event, helper) {

//     }
// })

({
    // createForm: function(component,event){      
    //     var newform = component.get("v.newForm");
    //     var createRecordEvent = $A.get("e.force:createRecord");
    //     createRecordEvent.setParams({
    //         "entityApiName":"Account",
    //         "defaultFieldValues": {'Account': newform}
    //     });
    //     // console.log("boatTypeId"+boatTypeId);
    //     createRecordEvent.fire();
    // },
    

    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.isOpen", true);
     },
   
     closeModel: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.isOpen", false);
     },
   
     likenClose: function(component, event, helper) {
        // Display alert message on the click on the "Like and Close" button from Model Footer 
        // and set set the "isOpen" attribute to "False for close the model Box.
        alert('thanks for like Us :)');
        component.set("v.isOpen", false);
     },


    handleChevrondownClick : function (cmp) {
        // cmp.set('v.chevrondownClick', !cmp.get('v.chevronupClick'));       
        console.log('////'+ chevrondownClick);
        var numberOfProduct = component.get("v.numberOfProduct");
        console.log(numberOfProduct);
        
        // console.log(numberOfProduct);
    },

    handleChevronupClick: function (cmp) {
        // cmp.set('v.chevronupClick', !cmp.get('v.chevronupClick'));
    },

    handleKeyUP : function(component, event, helper) {
        var searchInput = component.find("inputQuanlity");
        var searchValue = searchInput.get("v.value");
        console.log('innnn' + searchValue);
        component.set("v.notebook.Quanlity",searchValue);
    },

    // handleAddtocart: function(component, event, helper) {
    //     var quanlityNotebook = component.get("v.notebook.Quanlity");
    //     var updateEvent = component.getEvent("eventQuanlityNotebook");
    //     updateEvent.setParams({ "quanlityNotebook": quanlityNotebook });
    //     updateEvent.fire();
    //     console.log(JSON.stringify(quanlityNotebook));
    // },

    handleAddtocart: function(component, event, helper) {

        var notebook = component.get("v.notebook");
        console.log(JSON.stringify(notebook));
        var notebookObjects = component.get("v.notebookObjectsList");       

        var found = notebookObjects.find(element => element.Name === notebook.Name);
        //console.log('found'+found);
        var index = notebookObjects.findIndex(element => element.Name === notebook.Name);
       //console.log(index);
        
        if(!found){
            notebookObjects.push(notebook);
           // console.log(JSON.stringify(notebook.Quanlity));
            //console.log("found"+JSON.stringify(notebookObjects));

        }else{
           // console.log(JSON.stringify(notebook.Quanlity));
          // console.log(JSON.stringify(notebookObjects[index].Quanlity));
         notebookObjects[index].Quanlity = parseInt(notebookObjects[index].Quanlity)  + parseInt(notebook.Quanlity);
            //console.log(JSON.stringify(notebookObjects[index].Quanlity));
           // console.log(index);
        }

        //console.log("notebookObjects"+JSON.stringify(notebookObjects));

        //console.log(JSON.stringify(notebookObjects[index].Quanlity));

        
        var i;
        var priceTotal = 0;
        console.log("loop");
        for(i=0 ; i < notebookObjects.length; i++){
            console.log('mmm');
            console.log(notebookObjects[i].Price__c);
            console.log(notebookObjects[i].Quanlity);
            priceTotal = notebookObjects[i].Price__c * notebookObjects[i].Quanlity;
            console.log(priceTotal);
            notebookObjects[i].PriceTotal = priceTotal;
            console.log("Before loop");
            //component.set("v.notebookObjects[i].priceTotal",priceTotal);
        } 

        console.log("Cost loop");
        var totalCost = component.get("v.totalCost");
        totalCost = 0;
        // console.log("loop");
        for(i=0 ; i < notebookObjects.length; i++){
            // console.log("Product Selected" + notebookOfUser[i].Name)
            totalCost = totalCost + notebookObjects[i].PriceTotal;                     
        }
        console.log("Price Total" + totalCost)       
        component.set("v.totalCost",totalCost);
        component.set("v.notebookObjectsList",notebookObjects);
        console.log("notebookObjects"+JSON.stringify(notebookObjects));


    // var quanlityNotebook = component.get("v.notebook.Quanlity");
    //     var updateEvent = component.getEvent("eventQuanlityNotebook");
    //     updateEvent.setParams({ "quanlityNotebook": quanlityNotebook });
    //     updateEvent.fire();
    //     console.log(JSON.stringify(quanlityNotebook));
    },

    handleGoTocart : function(component, event, helper) {
        var notebookObjects = component.get("v.notebookObjectsList");
        console.log(JSON.stringify(notebookObjects));
        var totalCost = component.get("v.totalCost");

        var evt = $A.get("e.force:navigateToComponent");
        console.log('Event '+evt);
        evt.setParams({
            componentDef  : "c:productSelected",
            componentAttributes: {
                notebookObjects : notebookObjects,
                totalCost : totalCost
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



})