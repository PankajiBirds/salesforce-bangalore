import { LightningElement, wire } from 'lwc';
import { fireEvent, registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class PublisherComponent extends LightningElement {

    message;

    @wire(CurrentPageReference) pageRef;

    handlePublisher(){
        fireEvent(this.pageRef, "showMessage", "Hello welcome to iBirds Software Services");
    }

    handleSendDetail(){
        const dataArray = this.template.querySelectorAll(".forInput");

        fireEvent(this.pageRef, "sendDetail", dataArray);
    }

    handleSendMessage(data){
        this.message = data;
    }

    handleSubscribe(){
        registerListener("sendMessage", this.handleSendMessage, this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
}