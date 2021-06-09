import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

export default class FetchAccountListUsingLDS extends LightningElement {

    accountList;

    //  Way 1

    // @wire (getListUi, {
    //     objectApiName : 'Account',
    //     listViewApiName : 'AllAccounts'
    // }) allAccounts({data, error}){
    //     if(data) {
    //         console.log(data);
    //         this.accountList = data.records.records;
    //     } else {
    //         console.log(error);
    //     }
    // }

    //  Way 2

    @wire (getListUi, {
        listViewId : '00B5g000004LoHiEAK'
    }) allAccounts({data, error}){
        if(data) {
            console.log(data);
            this.accountList = data.records.records;
        } else {
            console.log(error);
        }
    }
}