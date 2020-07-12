// public with sharing class notebookRecords {
//     public notebookRecords() {

//     }
// }


// public with sharing class accountRecord {
//     // List<String> acct = new List<String>; 
//     public static List<Account> acct{get;set;}

//     @AuraEnabled
//     public static List<Account> getAccountRecord(){
//         acct = [SELECT Name,Phone,Email__c,Picture__c FROM Account];
//         return acct;
//     }
// }

public with sharing class notebookRecords {
    // List<String> notebook = new List<String>;
    public static List<Notebook__c> notebook{get;set;}

    @AuraEnabled
    public static List<Notebook__c> getNotebookRecords(){
        notebook = [SELECT Name, Laptops__c, Processor__c, Graphics__c, Display__c, Memory__c, Hard_Drive__c, OS__c, Special_Feature__c, Image__c, Price__c FROM Notebook__c];
        return notebook;
    }
}

