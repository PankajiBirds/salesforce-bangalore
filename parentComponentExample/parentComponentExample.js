import { LightningElement, track } from 'lwc';

export default class ParentComponentExample extends LightningElement {

    message;

    @track userDetail = {};

    handleSimpleEvent(data){
        alert(JSON.stringify(data));
        this.message = data.detail;
    }

    handleSimpleDetailEvent(event){                
        this.userDetail.username = event.detail.username;
        this.userDetail.email = event.detail.email;
    }
}