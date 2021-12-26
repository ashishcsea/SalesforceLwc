import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    parentProp;
    constructor()
    {
        super(); //Invokes constructor of lightning element class
        this.parentProp=120;
     /*    alert('PARENT : Inside constructor');
        alert('PARENT : value of parent prop : '+this.parentProp); */
    }
    connectedCallback()
    {
        /* alert('PARENT : Inside connected callback'); */
    }
    renderedCallback()
    {
        /* alert('PARENT : Inside renderedCallback'); */
    }

    handleClick()
    {
       //childRef will contaon reference of a child component object
       let childRef= this.template.querySelector('c-child');
       childRef.printChildProperty();
    }
    //function is created so that child can talk to parent
    handleChildEvent(event)
    {
        alert('Parent:child event received from child componennt');
        alert('Parent:data received from chile is '+event.detail.products);
    }
}