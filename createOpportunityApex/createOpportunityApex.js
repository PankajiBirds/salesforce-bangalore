import { LightningElement } from 'lwc';
import createOpportunity from '@salesforce/apex/ContactControllerLWC.createOpportunity';

export default class CreateOpportunityApex extends LightningElement {

    stageOption = [
        {label : "Close Won", value : "Close Won"},
        {label : "Close Lost", value : "Close Lost"}
    ]

    opportunityId = "";
    error = "";

    handleSave(){
        const dataArray =  this.template.querySelectorAll(".forInput");
        
        const data = {
            Name : dataArray[0].value,
            Amount : dataArray[1].value,
            CloseDate : dataArray[2].value,
            StageName : dataArray[3].value
        };

        alert(JSON.stringify(data));

        createOpportunity({opportunity : data}).then(result => {
            this.opportunityId = result;
            alert(result);
        }).catch(error => {
            this.error = error;
            alert(JSON.stringify(error));
        })
    }
}