import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    handleChildEvent(event)
    {
        alert('Grand Parent:child event received from child componennt');
        alert('Grand Parent:data received from chile is '+event.detail.products);
    }
}