import { LightningElement, wire,api } from 'lwc';
import getLocations from '@salesforce/apex/ContactController.getLocations';

export default class ContactsMap extends LightningElement {
    mapMarkers;
    @api listView='visible';

    @wire(getLocations)  
    wiredGetLocations({data,error}){  //data refers List<contact> object
        this.mapMarkers=[];
       if(data)
       {
           data.forEach(contact => {
               let mailingCity=contact.MailingCity;
               let mailingCountry=contact.Mailingountry;
                                     this.mapMarkers.push(
                                         {
                                             location:{City:mailingCity ,Country:mailingCountry},
                                             title:mailingCity+ ' : ' + mailingCountry
                                         }
                );
            }
       );
       }
    }

}