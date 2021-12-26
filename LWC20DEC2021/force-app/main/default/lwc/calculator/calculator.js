import { LightningElement } from 'lwc';
import { showToast } from 'c/utility';

export default class Calculator extends LightningElement {
    firstNo=0;
    secondNo=0;
    result=0;
    handleChange(event)
    {
       let targetName=event.target.name;
       if(targetName==="fno")
       {
           this.firstNo=parseInt(event.target.value);
       }
       else{
        this.secondNo=parseInt(event.target.value);
       }
    }
    add()
    {
          //this.result="The result of addition is .."+(this.firstNo+this.secondNo);
           showToast(this,'Addition','Addition done','info','pester');
    }
    sub()
    {
        this.result="The result of subtraction is .."+(this.firstNo-this.secondNo);
    }
}