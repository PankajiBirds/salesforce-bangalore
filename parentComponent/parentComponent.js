import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    handleSendToChild(){

        const dataArray = this.template.querySelectorAll(".forInput");

        this.template.querySelector(".childComponent").callFromParent(dataArray);
    }
}