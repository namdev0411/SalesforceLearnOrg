import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Account from '@salesforce/schema/Account';

export default class CreateAccount extends NavigationMixin(LightningElement) {
    @track recordTypeId;
    @track error;
    @wire(getObjectInfo,{objectApiName: Account})
    getObjectdata({data,error}){
        if(data){
            console.log('recordType: '+JSON.stringify(data.recordTypeInfos));
        }
    }
    connectedCallback(){
        this.navigateToNewAccoutntWithDefaults();
    }
    navigateToNewAccoutntWithDefaults(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state:{
                nooverride: '1',
                recordTypeId: '0125h000000YoBNAA0',
                backgroundContext: '/lightning/o/Account/list?filterName=Recent'
            }
        });
    } 
    
}