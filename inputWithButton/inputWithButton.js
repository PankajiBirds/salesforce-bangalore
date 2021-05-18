import { LightningElement } from 'lwc';

export default class InputWithButton extends LightningElement {

    username = "";
    email = "no-reply@gmail.com";
    contact = "";
    password = "";

    /*
    handleClickMe(){
        this.username =  this.template.querySelector(".username").value;
        this.email = this.template.querySelector(".email").value;
        this.contact = this.template.querySelector(".contact").value;
        this.password = this.template.querySelector(".password").value;
    }
    */

    handleClickMe(){
        const dataArray = this.template.querySelectorAll(".forInput");

        this.username = dataArray[0].value;
        this.email = dataArray[1].value;
        this.contact = dataArray[2].value == "" ? 'Unknown' : dataArray[2].value;
        this.password = dataArray[3].value;
    }
}