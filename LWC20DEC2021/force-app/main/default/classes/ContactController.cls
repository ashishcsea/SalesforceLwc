public with sharing class ContactController {

    @AuraEnabled (cacheable=true)   
    public static List<Contact> getContacts()
    {
        return [Select Id,Name,Title,Email,Phone from Contact order by Name LIMIT 10];
    }
    @AuraEnabled (cacheable=true) //NO DML operation can be performed of cacheable is true
    public static List<Contact> getLocations(){
        return [Select Id,MailingCity,MailingCountry from Contact LIMIT 10];
    }

   /*  @AuraEnabled  
    public static void deleteRecordContact(Contact contact){
       delete contact;
    } */
}
