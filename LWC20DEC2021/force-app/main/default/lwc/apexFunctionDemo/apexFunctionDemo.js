import { LightningElement, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ApexFunctionDemo extends LightningElement {
    //contacts;
    
    @track contacts=[];

    @wire(getContacts)
    wiredGetContacts({data,error})
    {
      if(data)
      {
         // this.contacts=data;
         data.forEach( (contact) => {
             this.contacts.push(
                 {
                     cid:contact.Id,
                     cname:contact.Name,
                     ctitle:contact.Email,
                     cemail:contact.Email,
                     cphone:contact.Phone
                 }
                 );
         });
      }
    }
}