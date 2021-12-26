import { LightningElement,api } from 'lwc';

export default class Modal extends LightningElement {
    @api modalTitle="Modal Title";
    @api modalContent="Modal Content";

    closeModal(){
      let divRef=this.template.querySelector('div');
      divRef.classList.add('slds-hide');

      let event=new CustomEvent('modalclose');
    this.dispatchEvent(event);
    }
}