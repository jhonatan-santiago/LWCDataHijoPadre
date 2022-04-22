import { api, LightningElement } from 'lwc';

export default class Padre extends LightningElement {
    @api nameParent = '';

    handleChange(event){
        this.nameParent = event.target.value;
    }
}