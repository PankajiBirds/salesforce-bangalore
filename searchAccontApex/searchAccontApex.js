import { LightningElement } from 'lwc';
import searchAccount from '@salesforce/apex/ContactControllerLWC.searchAccount';

export default class SearchAccontApex extends LightningElement {

    accountList;
    error;

    handleSearch(){
        const dataArray = this.template.querySelectorAll(".forInput");

        const data = {
            Name : dataArray[0].value,
            Phone : dataArray[1].value
        }

        searchAccount({account : data}).then(respone => {
            this.accountList = respone;
        }).catch(error => {
            this.error = JSON.stringify(error);
        })
    }   
}