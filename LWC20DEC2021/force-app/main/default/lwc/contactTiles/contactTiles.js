import { LightningElement,api } from 'lwc';

export default class ContactTiles extends LightningElement {
    @api contacts;
    handleContactSelected(event)
    {
     /*  alert('contactTiles: contactselected event received from contactTile child ');
      alert('contactTiles: selected contact Id :  ' + event.detail.contactId); */
    }
}