import { LightningElement, api, track } from 'lwc';

export default class lwcCustomModal extends LightningElement {
    @api cancelButtonText = 'Cancel'
    @api modalContainerClass = '';
    @api modalContentClass = '';
    @track modalClass = '';
    @track modalBodyClass = '';
    @track title;
    @track body;
    @track success = {
        variant: 'brand'
    };
	
    @api
    show() {
        this.dispatchEvent(new CustomEvent('modalshow'));
        this.template.querySelector('.lwc-modal').classList.remove('slds-hide');
        this.modalClass = 'slds-modal slds-fade-in-open ' + this.modalContainerClass;
        if (this.modalContentClass === '') {
            this.modalContentClass = 'slds-p-around_medium';
        }
        this.modalBodyClass = 'slds-modal__content ' + this.modalContentClass;
    }
    @api
    hide() {
        this.dispatchEvent(new CustomEvent('modalhide'));
        this.template.querySelector('.lwc-modal').classList.add('slds-hide');
        this.modalClass = 'slds-modal slds-fade-in-open';
        if (this.modalContentClass === '') {
            this.modalContentClass = 'slds-p-around_medium';
        }
        this.modalBodyClass = 'slds-modal__content ' + this.modalContentClass;
    }
}