import { LightningElement,api } from 'lwc';

export default class RecordViewFormDemo extends LightningElement {
    @api recordId; //Prop name must be recordId with proper caml case
}