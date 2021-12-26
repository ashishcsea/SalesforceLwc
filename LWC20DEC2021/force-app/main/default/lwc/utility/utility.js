import {ShowToastEvent} from 'lightning/platformShowToastEvent';

function showToast(component,toastTitle,toastMessage,toastVariant,toastMode)
{
   let event=new ShowToastEvent(
       {
           title:toastTitle,
           message:toastMessage,
           variant:toastVariant,
           mode:toastMode
       }
   );
   component.dispatchEvent(event);
}

 //It makes sure that functions inside this block is available used by other component
export{  
    showToast
}