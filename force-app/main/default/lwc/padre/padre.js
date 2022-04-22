import { api, LightningElement } from 'lwc';

export default class Padre extends LightningElement {
    msg;
    handleCustomEvent(event) {
        const textVal = event.detail.name;
        this.msg = textVal;
    }

}