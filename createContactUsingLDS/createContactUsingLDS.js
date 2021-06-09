import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateContactUsingLDS extends LightningElement {

    handleSave() {
        const contactData = this.template.querySelectorAll(".forInput");

        const fields = {
            FirstName : contactData[0].value,
            LastName : contactData[1].value,
            Phone : contactData[2].value,
            Email : contactData[3].value,
            AccountId : '0015g00000CjbgJAAR'
        }

        console.log(fields);

        createRecord({apiName : 'Contact', fields}).then(record => {
            console.log(record);
        }).catch(error => {
            console.log(error);
        })

    }

}