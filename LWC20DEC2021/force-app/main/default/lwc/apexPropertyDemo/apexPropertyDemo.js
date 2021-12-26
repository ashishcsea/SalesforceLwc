import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ApexPropertyDemo extends LightningElement {

    @wire(getContacts)
    contacts; //contacts.data will store the referece of list data
}