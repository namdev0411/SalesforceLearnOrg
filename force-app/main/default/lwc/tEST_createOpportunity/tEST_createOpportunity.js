import { api, LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAllField from '@salesforce/apex/TEST_createOpportunity.getAllField';

export default class TEST_createOpportunity extends NavigationMixin(LightningElement) {
    @api recordId;
    @track recordTypeId;
    @track isOpenModal = true;
    onLoadHandle(event){
        const {fields} = event.detail;
        fields.stageName = '作成中';
        const  form = this.template.querySelector('lightning-record-form');
        form.fields.StageName = '作成中'
    }
    closeModal(){
        this.isOpenModal = false;
        var url = window.location.href; 
        var value = url.substr(0,url.lastIndexOf('/') + 1);
        window.history.back();
        return false;
    }

    connectedCallBack(){
        // getAllField();
    }
}