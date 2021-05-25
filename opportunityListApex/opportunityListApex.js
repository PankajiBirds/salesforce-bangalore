import { LightningElement } from 'lwc';
import opportunityList from '@salesforce/apex/ContactControllerLWC.opportunityList';

export default class OpportunityListApex extends LightningElement {

    opportunityData;

    handleGetOpportunity(){
        opportunityList().then(result => {
            console.log("@@");
            console.log(JSON.stringify(result));
            this.opportunityData = result;
        }).catch(error => {
            console.log("##");
            alert(JSON.stringify(error));
            console.log(error);
        })
    }

}