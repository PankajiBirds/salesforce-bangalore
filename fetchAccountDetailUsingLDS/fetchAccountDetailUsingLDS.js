import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class FetchAccountDetailUsingLDS extends LightningElement {


    account = {};

    @wire (getRecord , {
        recordId : '0015g00000CkvvJAAR',
        fields : ['Account.Name','Account.Phone','Account.AccountNumber','Account.Rating']
    }) accountDetail({data, error}) {
        if(data) {
            console.log(data);
            this.account = {
                name : data.fields.Name.value,
                accountNumber : data.fields.AccountNumber.value,
                phone : data.fields.Phone.value,
                rating : data.fields.Rating.value
            };
        } else {
            console.log(error);
        }
    }
}