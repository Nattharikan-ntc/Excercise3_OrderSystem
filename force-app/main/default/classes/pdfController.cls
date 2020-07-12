// public Class pdfcontroller {
    
   
//     public String userId {get;set;}
//     public UserForm__c user {get;set;}
 
//     // public Object dataCustomerBefore{get;set;}

//     public pdfcontroller() {
//         String userId = System.currentPageReference().getParameters().get('User');
//         user = [SELECT 	Name,Street__c,City__c ,Province__c,Country__c,PostalCode__c,Email__c,Phone__c FROM UserForm__c WHERE Id=:userId];
//         System.debug(user);

//     }

//     public list<Order__c> getOrders() {
//         String userId = System.currentPageReference().getParameters().get('User');
//         List<Order__c>  orders = [SELECT Product__r.Name ,Product__r.Price__c ,Quantity__c FROM Order__c 
//         WHERE User__c=:userId];
//         System.debug(orders);  
//         return  orders;    

        
//     }