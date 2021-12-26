import { LightningElement } from 'lwc';

export default class ForEachDemo extends LightningElement {
    /* products=['Colgate','Levis','Rice','Curd']; */
    //products list contains javascript object
    products=[
       {pno:101,pname:'colgate',pprice:100},
       {pno:102,pname:'jeans',pprice:1200},
       {pno:103,pname:'sugar',pprice:35}
    ];
}