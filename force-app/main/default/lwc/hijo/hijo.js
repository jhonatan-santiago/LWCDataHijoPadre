import { api, LightningElement, track } from 'lwc';

export default class Hijo extends LightningElement {
    @api firstName= '';

    handleChange(event) {
        event.preventDefault();
        const name = event.target.value;
        const selectEvent = new CustomEvent('mycustomevent', {
            detail: {
                name: name
            }
        });
       this.dispatchEvent(selectEvent);
    }
}