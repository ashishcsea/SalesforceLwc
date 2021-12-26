import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import CONTACT_SELECTED_CHANNEL from '@salesforce/messageChannel/ContactSelected__c';
import { publish,MessageContext } from 'lightning/messageService';

export default class ContactPublisher extends LightningElement {
    selectedContactId;
    @wire(getContacts)
    contacts;  //contacts.data will refer list of contact List<Contact> objects

    @wire(MessageContext)
    context;

    handleContactSelected(event)
    {
      /* alert('contactPublisher: contactselected event received from contactTile child ');
      alert('contactPublisher: selected contact Id :  ' + event.detail.contactId ); */

      this.selectedContactId = event.detail.contactId;

      let message = {contactRecordId:this.selectedContactId };
      
      publish(this.context,CONTACT_SELECTED_CHANNEL,message);  
    }

}