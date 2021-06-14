import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

export default class DisplayPicklistValues extends LightningElement {

    leadSourceOptions;
    level__cOptions;
    salutationOptions;

    @wire (getPicklistValues , {
        recordTypeId : '0125g000000t5HjAAI',
        fieldApiName : 'Contact.LeadSource',
    }) ratingPicklistValue({data, error}){
        if(data) {            
            console.log(data);            
            this.leadSourceOptions = data.values;
        } else {            
            console.log(error);
        }
    }

    @wire (getPicklistValuesByRecordType, {
        recordTypeId : '0125g000000t5HjAAI',
        objectApiName : 'Contact'
    }) contactObjectPickList({data, error}){
        if(data) {
            console.log("@@");
            console.log(data);
            this.level__cOptions = data.picklistFieldValues.Level__c.values;
            this.salutationOptions = data.picklistFieldValues.Salutation.values;
        } else {
            console.log("##");
            console.log(error);
        }
    }
}