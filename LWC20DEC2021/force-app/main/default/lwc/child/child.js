import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    //By default all properties in a class are private
    //childProperty=123;//By default child property is private property.Would be accessible only within 
                        //THE function of this child class.No access outside this class
    //Child prop is now a public property and accessible to parent
    //Never set value of public property inside component
    @api childProperty=123;
    products=['sugar','shoe','dove']

    constructor()
    {
        super(); //Invokes constructor of lightning element class
        this.childProperty=500;
      /*   alert('CHILD : Inside constructor');
        alert('CHILD : value of parent prop : '+this.childProperty); */
    }
    connectedCallback()
    {
        /* alert('CHILD : Inside connected callback');
        alert('CHILD : value of parent prop : '+this.childProperty); */
    }
    renderedCallback()
    {
        /* alert('CHILD : Inside renderedCallback'); */
    }

   @api printChildProperty()
    {
        /* alert('value of child property is '+this.childProperty); */
    }
    talkToParent()
    {
        //event name is always in lowercase
        // let event=new CustomEvent('childevent',{detail:456});
       // let event=new CustomEvent('childevent',{detail:{abc:4}});
       let event=new CustomEvent('childevent',{
                                            detail:{products:this.products},
                                            bubbles:true,
                                            composed:true
                                        }
                                        
                                 );
        this.dispatchEvent(event);
    }
    
}