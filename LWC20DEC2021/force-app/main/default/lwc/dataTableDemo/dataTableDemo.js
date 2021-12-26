import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS=[
    
    {label:'Contact Name',fieldName:'Name'},
    {label:'Title',fieldName:'Title'},
    {label:'Email',fieldName:'Email',editable:"true"},
    {label:'Phone',fieldName:'Phone'},
    
];
export default class DataTableDemo extends LightningElement {

    @wire(getContacts)
    contacts;  //List<Contact>

    columns=COLUMNS;
}