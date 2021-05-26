import { LightningElement } from 'lwc';

export default class ChildComponentExample extends LightningElement {

    handleSendToParent(){
        alert("called");
        const simpleEvent = new CustomEvent("simple",{
            detail : "iBirds Software Services, Ajmer"
        });

        this.dispatchEvent(simpleEvent);
    }

    handleSendDetail(){
        alert("called");
        const dataArray = this.template.querySelectorAll(".forInput");
    
        const userData = {
            username : dataArray[0].value,
            email : dataArray[1].value
        };

        const simpleDetailEvent = new CustomEvent("simpledetail", {
            detail : userData
        });

        this.dispatchEvent(simpleDetailEvent);
    }
}