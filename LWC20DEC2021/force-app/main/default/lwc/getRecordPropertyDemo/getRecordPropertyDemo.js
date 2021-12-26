import { LightningElement, wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import FIELD_NAME from '@salesforce/schema/Contact.Name';
import FIELD_TITLE from '@salesforce/schema/Contact.Title';
import FIELD_Email from '@salesforce/schema/Contact.Email';
import FIELD_Phone from '@salesforce/schema/Contact.Phone';

//const FIELDS=['Contact.Name','Contact.Title','Contact.Email','Contact.Phone'];//In a JS class u can't declare a const fields
const FIELDS=[FIELD_NAME,FIELD_TITLE,FIELD_Email,FIELD_Phone];

export default class GetRecordPropertyDemo extends LightningElement {
   
    @api recordId;
  //$recordId is a dynamic variable
    @wire(getRecord,{recordId:'$recordId',fields:FIELDS })
    contact; //contact.data refers to an object containing record

    //getter method for a prop name
    get name()
    {
       return this.contact.data.fields.Name.value;
    }
    get title()
    {
       return this.contact.data.fields.Title.value;
    }
    get email()
    {
       return this.contact.data.fields.Email.value;
    }
    get phone()
    {
       return this.contact.data.fields.Phone.value;
    }
}