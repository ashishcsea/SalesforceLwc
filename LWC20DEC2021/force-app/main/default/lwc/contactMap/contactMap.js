import { LightningElement,api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import MAILING_CITY from '@salesforce/schema/Contact.MailingCity';
import MAILING_COUNTRY from '@salesforce/schema/Contact.MailingCountry';

const FIELDS=[MAILING_CITY,MAILING_COUNTRY];

export default class ContactMap extends LightningElement {
    mapMarker;
    @api recordId;

    @wire(getRecord,{recordId:'$recordId',fields:FIELDS})
    wiredGetRecord({data,error})
    {
       if(data)
       {
           let mailingCity=data.fields.MailingCity.value;
           let mailingCountry=data.fields.MailingCountry.value;

           this.mapMarker=[
              {
                  location :{City:mailingCity,Country:mailingCountry},
                  title:mailingCity + ' : '+mailingCountry
              }
           ];
       }
    }
   
}