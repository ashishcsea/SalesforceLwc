import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ApexImperativeDemo extends LightningElement {
   contacts;

    retrieveContacts()
    {
        //Impeartive call to apex method.Promise object will be returned
        //Promise.resolve or Promise.reject
        getContacts()
        .then( (results) => {this.contacts=results; } )
        .catch( (error) => {});
    }
}