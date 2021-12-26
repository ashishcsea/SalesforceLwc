import { LightningElement } from 'lwc';

export default class ConditionalRenderDemo extends LightningElement {
    showText=true; //REACTIVE means when the value of prop changes UI will be rerendered
    handleChange()
    {
        this.showText=!this.showText;
    }
}