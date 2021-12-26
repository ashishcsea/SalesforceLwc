import { LightningElement,api } from 'lwc';

export default class ContactTile extends LightningElement {
    @api contact;

    handleContactClick()
    {
       // alert('contactTile : User clicked on contact name');
       // alert('contactTile : selected contact Id '+this.contact.Id + ' selected contact name '+this.contact.Name);
        
        let event=new CustomEvent('contactselected',{
                                                      detail: {contactId:this.contact.Id },
                                                      bubbles:true,
                                                      composed:true
                                                    }
                                  );
        this.dispatchEvent(event);
    }
}