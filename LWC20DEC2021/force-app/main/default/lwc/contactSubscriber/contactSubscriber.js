import { LightningElement, wire } from 'lwc';
import CONTACT_SELECTED_CHANNEL from '@salesforce/messageChannel/ContactSelected__c';
import { subscribe,unsubscribe,MessageContext } from 'lightning/messageService';
import { getRecord,deleteRecord } from 'lightning/uiRecordApi';
import FIELD_NAME from '@salesforce/schema/Contact.Name'
import FIELD_TITLE from '@salesforce/schema/Contact.Title'
import FIELD_EMAIL from '@salesforce/schema/Contact.Email'
import FIELD_PHONE from '@salesforce/schema/Contact.Phone'

import {NavigationMixin} from 'lightning/navigation';
//import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import {showToast} from 'c/utility'

const FIELDS={FIELD_NAME,FIELD_TITLE,FIELD_EMAIL,FIELD_PHONE};

export default class ContactSubscriber extends NavigationMixin(LightningElement) {

    subscription;
    selectedContactId;

    @wire(getRecord,{recordId:'$selectedContactId',fields:FIELDS})
    contact; //refers to an object containing field property

    @wire(MessageContext)
    context;

    connectedCallback()
    {
       this.subscribeToMessageChannel();
    }

    disconnectedCallback()
    {
        unsubscribe(this.subscription);
        this.subscription=null;
    }
    subscribeToMessageChannel()
    {
        this.subscription = subscribe(this.context,CONTACT_SELECTED_CHANNEL,(receivedMessage)=>{this.handleMessage(receivedMessage);});
    }
   

    handleMessage(message)
    {
    //    alert('Contact Subscriber :  message received');
    //    alert('Contact Subscriber :  selected contact id : '+message.contactRecordId);
       this.selectedContactId=message.contactRecordId;
    }

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
    editRecord()
    {
        let page={
              type:'standard__recordPage',
              attributes:{recordId:this.selectedContactId,objectApiName:'Contact',actionName:'edit'}
        }
        this[NavigationMixin.Navigate](page);
    }
    
    deleteContactRecord()
    {
        deleteRecord(this.selectedContactId)
        .then(() => {
            //alert('Record deleted successfully');
           /*  let event=new ShowToastEvent({
                title:'DELETE RECORD',
                message:'Record deletion successful',            
                variant:'success',//'info/warning/error/success'
                mode:'dismisable' //'dismisable/pester/sticky'
            }
            ); */
            //this.dispatchEvent(event);
            showToast(this,'DELETE RECORD','Record deletion successful','success','dismisable')
        } )
        .catch( () =>{
            //alert('Record deleted failed');
          /*   let event=new ShowToastEvent({
                title:'DELETE RECORD',
                message:'Record deletion unsuccessful',            
                variant:'error',//'info/warning/error/success'
                mode:'sticky' */
      /*   } ); */
        //this.dispatchEvent(event);
        showToast(this,'DELETE RECORD','Record deletion unsuccessful','error','sticky')
    })
    

    }
    showModal;  //Private prop to display or hide the modal dialog box
    sendEmail()
    {
       // alert('Send email is not available now');
       this.showModal=true;
    }
    handleModalClose()
    {
        this.showModal=false;
    }
}