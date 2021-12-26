import { LightningElement, track } from 'lwc';

export default class TrackDemo extends LightningElement {
   @track products=['soap','Colgate','Rice'];//Track recognise the change in the contents of array and re render it
    addProduct()
    {
        this.products.push('Shampoo');
    }
}