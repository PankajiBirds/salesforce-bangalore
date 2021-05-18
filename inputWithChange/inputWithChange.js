import { LightningElement } from 'lwc';

export default class InputWithChange extends LightningElement {

    username = "";
    email = "";
    contact = "";

    /*
    handleUsername(event){
        this.username =  event.target.value;
    }

    handleEmail(e){
        this.email = e.target.value;
    }

    handleContact(e){
        this.contact = e.target.value;
    }
    */

    handleInput(event){
        var inputName = event.target.name;
        const inputValue = event.target.value;
        
        if(inputName === "username"){
            this.username = inputValue;
        } else if(inputName === "email"){
            this.email = inputValue;
        } else if(inputName === "contact") {
            this.contact = inputValue;
        }
    }
}