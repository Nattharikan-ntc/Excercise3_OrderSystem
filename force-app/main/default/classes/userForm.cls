public with sharing class userForm {
    @AuraEnabled
    public static List<UserForm__c> saveUserForm( UserForm__c[] userForm, String[] notebookListOfUserId) {
        // Perform isUpdateable() checking first, then
        // upsert userForm;
        System.debug('bbbb');
        System.debug(userForm);
        System.debug(notebookListOfUserId);
        // return userForm;
        //insert userForm;
        // for(UserForm__c Form:userForm){
        //     for(String notebookId:notebookListOfUserId){
        //         Form.Notebook__c =notebookId;
        //         System.debug(Form.Notebook__c);
        //         // userForm.Notebook__c = notebookId;
        //     }
        // }

        for(Integer i=0;i<userForm.size();i++){
            userForm[i].Notebook__c = notebookListOfUserId[i];
            System.debug(userForm[i].Notebook__c);

        }
        
        insert userForm;

        return userForm;
        //System.debug(userForm);
        
    }

    
}
