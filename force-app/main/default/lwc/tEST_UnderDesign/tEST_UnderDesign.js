import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
import { api,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TEST_UnderDesign extends LightningElement {
    @api recordId;
    @track isLoading = false;

    closeModal(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }
    handleSave(event){
        event.preventDefault(); 
        this.isLoading = true;
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    handleLoading(){
        this.isLoading = true;
    }

    handleSuccess(event){
        const {id} = event.detail;
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Opportunity' +id+ 'update successfully',
            variant: 'success'
         });
         this.isLoading = false;
         this.dispatchEvent(evt);
         this.dispatchEvent(new CloseActionScreenEvent());
    }

    renderedCallback(){
        this.isLoading = false;
    }
}